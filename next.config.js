/**
 * @type {import('next').NextConfig}
 */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig= {
  reactStrictMode: true, styledComponents: true | {
    ssr: true,
    displayName: true,
  } 
}

module.exports = withPWA(nextConfig)
