import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: "/importteile",
  assetPrefix: "/importteile/",
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
  output: "export",
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
