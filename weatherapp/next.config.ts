const withPWA = require('next-pwa')({
  dest: 'public', // where the service worker will be generated
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // disable in dev mode
})

module.exports = withPWA({
  // your existing Next.js config
})