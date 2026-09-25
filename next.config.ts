import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "lucianion.co.uk" }],
  },
};

export default nextConfig;
