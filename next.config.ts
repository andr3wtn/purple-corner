import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/purple-corner-website" : "",
  assetPrefix: isProd ? "/purple-corner-website/" : "",
    eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
