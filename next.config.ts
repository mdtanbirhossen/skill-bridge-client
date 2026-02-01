import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ibb.co"], // add all external domains you use for images here
  },
  reactStrictMode: true,
};

export default nextConfig;
