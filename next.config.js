const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.licdn.com",
      "dam.malt.com",
      "drive.google.com",
      "www.gnu.org",
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
