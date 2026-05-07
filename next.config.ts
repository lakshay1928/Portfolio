import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-build",
  turbopack: {
    root: process.cwd(),
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
