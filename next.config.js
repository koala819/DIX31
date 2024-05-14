/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Appliquer cette politique de cache à toutes les images
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache à tous les fichiers statiques (CSS, JS)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache aux fichiers dans le dossier public
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache aux fichiers dans le dossier lib
        source: '/lib/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache aux fichiers dans le dossier types
        source: '/types/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache aux fichiers dans le dossier context
        source: '/context/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache aux fichiers dans le dossier components
        source: '/components/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache aux fichiers dans le dossier ui
        source: '/ui/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache aux fichiers dans le dossier utils
        source: '/utils/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
      {
        // Appliquer cette politique de cache aux fichiers dans le dossier styles
        source: '/styles/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour 1 an
          },
        ],
      },
    ]
  },

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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    path: '/_next/image',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.hdnux.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.reuters.com',
        port: '',
      },
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
