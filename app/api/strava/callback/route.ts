// app/api/strava/callback/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  const tokenRes = await axios.post(`https://www.strava.com/oauth/token`, {
    client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
  });

  const accessToken = tokenRes.data.access_token;
  console.log(tokenRes.data)
  // TODO: Save this to DB and implement refresh token save

//   const isExpired = Date.now() / 1000 > expires_at;

// if (isExpired) {
//   const res = await axios.post('https://www.strava.com/api/v3/oauth/token', {
//     client_id: process.env.STRAVA_CLIENT_ID,
//     client_secret: process.env.STRAVA_CLIENT_SECRET,
//     grant_type: 'refresh_token',
//     refresh_token,
//   });

  const activityRes = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return NextResponse.json(activityRes.data); // returns simple activities list
}
