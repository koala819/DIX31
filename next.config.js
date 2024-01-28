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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'dam.malt.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.gnu.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.soprasteria.fr',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.club306.fr',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'korben.info',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
