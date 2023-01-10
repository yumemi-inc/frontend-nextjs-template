/** @format */

const isDevelopment = process.env.NODE_ENV === "development"

/**
 * @type { import("next").NextConfig}
 */
module.exports = {
  reactStrictMode: isDevelopment,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: isDevelopment,
  },
  experimental: {
    swcMinify: true,
    esmExternals: true,
    cpus: 4,
  },
}
