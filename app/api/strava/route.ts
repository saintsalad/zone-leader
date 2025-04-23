// app/api/strava/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const redirectUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI}&approval_prompt=auto&scope=activity:read_all`;
  return NextResponse.redirect(redirectUrl);
}
