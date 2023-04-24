/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // productionBrowserSourceMaps: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  }
};

module.exports = nextConfig
