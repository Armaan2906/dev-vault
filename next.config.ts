import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  typescript:{
    ignoreBuildErrors:true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
