/** @type {import('next').NextConfig} */
const nextConfig = {
   basePath: '/vanitha-site',
  assetPrefix: '/vanitha-site',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig