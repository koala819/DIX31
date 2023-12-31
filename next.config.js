const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    MAIL_FROM: process.env.MAIL_FROM,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_PWD: process.env.MAIL_PWD,
    MAIL_USER: process.env.MAIL_USER,
  },
  images: {
    domains: [
      "media.licdn.com",
      "dam.malt.com",
      "drive.google.com",
      "www.gnu.org",
      "www.soprasteria.fr",
      "www.club306.fr",
      "res.cloudinary.com",
      "korben.info",
      "images.unsplash.com",
      "randomuser.me",
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
