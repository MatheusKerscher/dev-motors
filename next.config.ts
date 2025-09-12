import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cosmicjs.com",
      },
    ],
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
