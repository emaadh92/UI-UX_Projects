/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.sanity.io",
        port: '',
        // pathname: '/demos/images/**',
      }
    ],
  },
  
};

module.exports = nextConfig;


