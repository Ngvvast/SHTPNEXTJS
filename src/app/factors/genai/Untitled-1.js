// filepath: c:\Users\vast studio\Desktop\shtpnextjs\next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  // Add allowed origins for development
  allowedDevOrigins: [
    '192.168.0.166', // Your local network IP
    'localhost',
  ],
  images: {
    unoptimized: true, // Necessary for static export if using next/image
    // Increase the maximum allowed size for images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // If your site will be at https://<username>.github.io/<repository-name>/
  // basePath: '/<repository-name>', // Replace <repository-name> with your repo's name
  // assetPrefix: '/<repository-name>', // Replace <repository-name>
};

export default nextConfig;