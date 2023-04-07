/**
 * @type {import('next').NextConfig}
 */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig= {
  reactStrictMode: true,
  experimental: { appDir: true, },
  images: { remotePatterns: [{ hostname: '*.googleusercontent.com' }, { hostname: 'avatars.githubusercontent.com' }] }
}

module.exports = withPWA(nextConfig)
