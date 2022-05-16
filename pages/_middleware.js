import { NextResponse } from "next/server";

export function middleware() {
 const ContentSecurityPolicy = `
    default-src 'self' *.googletagmanager.com *.arc.io;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com arc.io *.arc.io;
    child-src 'self' *.youtube.com *.google.com *.twitter.com *.arc.io;
    style-src 'self' 'unsafe-inline' *.googleapis.com *.arc.io *.cloudflare.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' *.googleapis.com *.gstatic.com *.arc.io;
  `;
 const response = NextResponse.next();
 response.headers.set("Content-Security-Policy", ContentSecurityPolicy.replace(/\n/g, ""));
 response.headers.set("Referrer-Policy", "no-referrer");
 response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
 response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
 response.headers.set("X-Frame-Options", "sameorigin");
 response.headers.set("X-Content-Type-Options", "nosniff");
 response.headers.set("X-DNS-Prefetch-Control", "on");
 response.headers.set("X-XSS-Protection", "1; mode=block");
 response.headers.set("Accept-Encoding:", "gzip");
 return response;
}
