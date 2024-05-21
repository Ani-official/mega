/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['plniyvdruzlnolvsjksw.supabase.co'],
  },
};

module.exports = nextConfig;
