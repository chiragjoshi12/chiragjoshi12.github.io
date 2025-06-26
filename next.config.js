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
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'roastfolio.vercel.app',
      },
    ],
  },
};

module.exports = nextConfig;
