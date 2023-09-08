/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ['picsum.photos']
  },
  staticPageGenerationTimeout: 300,
  distDir: "dist"
}

module.exports = nextConfig
