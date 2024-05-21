/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['ddmvxcisupovuwhywame.supabase.co'],
  },
};

module.exports = nextConfig;
