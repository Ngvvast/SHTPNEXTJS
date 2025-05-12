import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    // For demonstration purposes, we'll use some simple rules to classify URLs
    // In a production environment, you would use a proper API like Google Safe Browsing
    const GOOGLE_SAFE_BROWSING_KEY = process.env.GOOGLE_SAFE_BROWSING_KEY;
    
    // Use simple heuristics if API key isn't available (for demo/education purposes)
    if (!GOOGLE_SAFE_BROWSING_KEY) {
      console.log('Using demo mode - no API key available');
      
      // Simple heuristic checks for educational purposes
      const suspiciousDomains = ['evil', 'malware', 'phish', 'hack', 'virus', 'trojan', 'spoof', 'scam'];
      const suspiciousTLDs = ['.xyz', '.tk', '.top', '.loan', '.work', '.date', '.racing'];
      const legitDomains = ['google', 'microsoft', 'apple', 'amazon', 'nhs.uk', 'gov.uk', 'github'];
      
      const urlLower = url.toLowerCase();
      
      // Check for typical phishing characteristics
      let isSafe = true;
      let reason = '';
      
      // Check for suspicious domains
      if (suspiciousDomains.some(domain => urlLower.includes(domain))) {
        isSafe = false;
        reason = 'Contains suspicious keywords';
      }
      
      // Check for suspicious TLDs
      if (suspiciousTLDs.some(tld => urlLower.endsWith(tld))) {
        isSafe = false;
        reason = 'Uses suspicious top-level domain';
      }
      
      // Check for IP addresses in URL (often used in phishing)
      if (/https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(urlLower)) {
        isSafe = false;
        reason = 'Uses IP address instead of domain name';
      }
      
      // Special override for legitimate domains
      if (legitDomains.some(domain => urlLower.includes(domain))) {
        // Make sure it's not a subdomain trick like google.evil.com
        const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
        const hostname = urlObj.hostname;
        if (legitDomains.some(domain => hostname.endsWith(domain) || hostname === domain)) {
          isSafe = true;
          reason = '';
        }
      }
      
      // For educational examples - mark specific test URLs as unsafe
      if (urlLower.includes('example-phishing') || urlLower.includes('test-malware')) {
        isSafe = false;
        reason = 'Detected as a phishing test URL';
      }
      
      return NextResponse.json({ 
        isSafe, 
        reason, 
        note: 'This is using simplified demo logic for educational purposes only'
      });
    }

    // If we have an API key, use the actual Google Safe Browsing API
    const response = await fetch('https://safebrowsing.googleapis.com/v4/threatMatches:find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client: {
          clientId: 'shtpnextjs',
          clientVersion: '1.0.0'
        },
        threatInfo: {
          threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE', 'POTENTIALLY_HARMFUL_APPLICATION'],
          platformTypes: ['ANY_PLATFORM'],
          threatEntryTypes: ['URL'],
          threatEntries: [{ url }]
        }
      })
    });

    const data = await response.json();
    const isSafe = !data.matches || data.matches.length === 0;

    return NextResponse.json({ isSafe });
  } catch (error) {
    console.error('URL check error:', error);
    return NextResponse.json({ error: 'Failed to check URL safety' }, { status: 500 });
  }
}