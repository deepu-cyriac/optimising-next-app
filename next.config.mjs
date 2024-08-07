/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com" }], //to allow next.js to fetch images from external site
  },
};

export default nextConfig;
