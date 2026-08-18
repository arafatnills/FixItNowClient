import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.shadcnspace.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  cacheComponents: true,
};

export default nextConfig;
