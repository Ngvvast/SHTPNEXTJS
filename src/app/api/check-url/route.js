import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  // Simplified simulation logic
  let isSafe = true;
  let reason = 'Simulated safe response.';
  const urlLower = url.toLowerCase();

  // Example of a simple heuristic for simulation
  if (urlLower.includes('phishing') || urlLower.includes('malware') || urlLower.includes('evil')) {
    isSafe = false;
    reason = 'Simulated unsafe URL (contains suspicious keywords).';
  } else if (urlLower.length > 0 && urlLower.length < 10) {
    // Arbitrary rule for variety in simulation
    isSafe = false;
    reason = 'Simulated unsafe URL (URL too short for this demo).';
  }

  // Simulate a delay, as an API call would have latency
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json({
    isSafe,
    reason,
    note: 'This is a simulated response for demonstration purposes.'
  });
}