import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      new URL('https://i.pinimg.com/736x/d8/30/f0/d830f0e56de9360efc1f3a3239941137.jpg'),
    ],
  },
};

export default nextConfig;
