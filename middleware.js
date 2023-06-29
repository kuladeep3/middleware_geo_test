import { NextResponse } from 'next/server';

// Limit the middleware to path `/`
export const config = {
  matcher: '/',
};

export function middleware(request) {
  const { geo } = request;
  console.log('geo', geo);

  // Check if 'userGeo' cookie exists or not
  const hasCookie = request.cookies.has('userGeo');

  const response = NextResponse.next();

  // Set cookie if not present previously
  if (!hasCookie) {
    response.cookies.set('uesrGeo', JSON.stringify(geo));
  }
  return response;
}
