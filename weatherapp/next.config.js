/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
        pathname: "/**", // allow all paths from this host
      },
    ],
  },
};

module.exports = nextConfig;

