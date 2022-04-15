/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    COIN_RANKING_HOST: process.env.COIN_RANKING_HOST,
    COIN_RANKING_API: process.env.COIN_RANKING_API,
  }
}

module.exports = nextConfig
