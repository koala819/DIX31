const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    domains: [
      "media.licdn.com",
      "dam.malt.com",
      "drive.google.com",
      "www.gnu.org",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
