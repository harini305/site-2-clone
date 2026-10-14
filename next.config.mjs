/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Image Optimization is switched off (Vercel Hobby image-transformation quota): next/image serves
    // the original files as-is.
    unoptimized: true,
  },
};

export default nextConfig;
