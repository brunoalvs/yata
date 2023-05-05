/**
 * @type {import('next').NextConfig}
 */
const path = require('path')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  sw: 'service-worker.js'
})

const nextConfig= {
  reactStrictMode: true,
  compiler: { styledComponents: true, },
  images: { remotePatterns: [{ hostname: '*.googleusercontent.com' }, { hostname: 'avatars.githubusercontent.com' }] },
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
}

module.exports = withPWA(nextConfig)
