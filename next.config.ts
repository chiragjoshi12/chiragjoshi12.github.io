import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "web.edutorapp.com",
      },
      {
        protocol: "https",
        hostname: "chiragjoshi12.github.io",
      }
    ],
  },
};

export default nextConfig;
