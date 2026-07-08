import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Qualidades liberadas para o next/image (Next 16 exige lista explícita).
    qualities: [75, 85, 92, 100],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
