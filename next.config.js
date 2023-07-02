/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/cv", // Repository name in github. This setting is for Github actions.
  images: {
    unoptimized: true,
  },
  output: "export",
}

module.exports = nextConfig
