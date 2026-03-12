import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy to enforce non-www domain as the canonical version.
 * Redirects all www.martlet.ai requests to martlet.ai with a 301 permanent redirect.
 */
export function proxy(request: NextRequest) {
  // const hostname = request.headers.get('host') || '';

  /* 
  // 301 redirect from www to non-www
  if (hostname.startsWith('www.')) {
    const nonWwwHost = hostname.replace(/^www\./, '');
    const url = request.nextUrl.clone();
    url.host = nonWwwHost;
    return NextResponse.redirect(url, 301);
  }
  */

  return NextResponse.next();
}
