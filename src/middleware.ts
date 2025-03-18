import { NextResponse, NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Set CSP headers to allow Rumble embeds
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; frame-src 'self' https://rumble.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://rumble.com; style-src 'self' 'unsafe-inline' https://rumble.com; img-src 'self' data: https://rumble.com; connect-src 'self' https://rumble.com;"
  )

  return response
}

export const config = {
  matcher: '/video/:path*',
} 