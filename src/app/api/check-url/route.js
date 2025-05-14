import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  // This route is statically generated at build time due to 'force-static'.
  // It returns a generic, fixed response as requested for the static export.
  return NextResponse.json({
    isSafe: true,
    reason: 'Simulated safe response (static placeholder).',
    note: 'This is a generic response from a statically exported API route. URL checking is bypassed.'
  });
}