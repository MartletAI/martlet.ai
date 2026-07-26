/**
 * Domains rejected on gated-content forms (brochure downloads): public
 * webmail (not a work email), reserved/placeholder domains, and disposable
 * inbox services. Not meant to be airtight — just filters the casual and
 * bot case, per the site's actual gating strategy. Add named competitor
 * domains here too, if any are identified.
 */
const BLOCKED_EMAIL_DOMAINS = new Set([
  // Public webmail
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "ymail.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "gmx.net",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "yandex.ru",

  // Reserved / placeholder domains (never real deliverable mailboxes)
  "example.com",
  "example.org",
  "example.net",
  "test.com",

  // Disposable / temporary inbox services
  "mailinator.com",
  "guerrillamail.com",
  "yopmail.com",
  "10minutemail.com",
  "tempmail.com",
  "throwawaymail.com",
  "trashmail.com",
  "getnada.com",
  "sharklasers.com",
]);

/** True if the email's domain is blocked, or the email is malformed. */
export function isBlockedEmailDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase().trim();
  if (!domain) return true;
  return BLOCKED_EMAIL_DOMAINS.has(domain);
}
