import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
