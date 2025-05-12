/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  allowedDevOrigins: [
    '192.168.0.166', // Your local network IP
    'localhost',
  ],
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  basePath: '/SHTPNEXTJS',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/SHTPNEXTJS',
  },
  // assetPrefix will default to basePath. No need for publicRuntimeConfig for this.
};

export default nextConfig;
