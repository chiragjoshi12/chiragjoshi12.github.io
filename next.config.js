/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'web.edutorapp.com',
      },
      {
        protocol: 'https',
        hostname: 'chiragjoshi12.github.io',
      },
    ],
  },
};

module.exports = nextConfig;
