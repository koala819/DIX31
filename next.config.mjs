/** @type {import('next').NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: '/atom.xml',
        destination: '/api/atom',
        permanent: true,
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
    // NEXT_PUBLIC_SANITY_API_PROJECT_ID:
    //   process.env.NEXT_PUBLIC_SANITY_API_PROJECT_ID,
    // NEXT_PUBLIC_SANITY_API_DATASET: process.env.NEXT_PUBLIC_SANITY_API_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    path: '/_next/image',
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
      { hostname: 's.hdnux.com' },
      { hostname: 'www.reuters.com' },
      { hostname: 'media.licdn.com' },
      { hostname: 'dam.malt.com' },
      { hostname: 'drive.google.com' },
      { hostname: 'www.gnu.org' },
      { hostname: 'www.soprasteria.fr' },
      { hostname: 'www.club306.fr' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'korben.info' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'randomuser.me' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
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

export default config
