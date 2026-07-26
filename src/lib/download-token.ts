import { createHmac, timingSafeEqual } from "crypto";

const TOKEN_TTL_MS = 72 * 60 * 60 * 1000; // 72 hours

function getSecret(): string {
  const secret = process.env.BROCHURE_DOWNLOAD_SECRET;
  if (!secret) {
    throw new Error("BROCHURE_DOWNLOAD_SECRET environment variable is not set");
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

/**
 * Generates a signed, time-limited token for a specific file. The token
 * embeds no state beyond the filename + expiry — verifying it just means
 * recomputing the same HMAC, no database involved.
 */
export function generateDownloadToken(pdfFilename: string): { token: string; expires: number } {
  const expires = Date.now() + TOKEN_TTL_MS;
  const token = sign(`${pdfFilename}:${expires}`);
  return { token, expires };
}

/** Verifies a token was signed for this exact filename + expiry, and hasn't expired. */
export function verifyDownloadToken(pdfFilename: string, expires: string, token: string): boolean {
  const expiresNum = Number(expires);
  if (!Number.isFinite(expiresNum) || Date.now() > expiresNum) return false;

  const expected = sign(`${pdfFilename}:${expiresNum}`);
  const expectedBuf = Buffer.from(expected, "hex");
  const actualBuf = Buffer.from(token, "hex");
  if (expectedBuf.length !== actualBuf.length) return false;

  return timingSafeEqual(expectedBuf, actualBuf);
}
