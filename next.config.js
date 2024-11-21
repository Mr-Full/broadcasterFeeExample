// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack:  (config, options) => {
    config.resolve.fallback = { 
      fs: false, 
      net: false, 
      tls: false 
    };
 if (options.isServer) {
      config.resolve.alias['@railgun-community/curve25519-scalarmult-wasm'] =
        '@railgun-community/curve25519-scalarmult-rsjs';
    } else {
      config.resolve.alias['default-gateway'] = false;
      config.resolve.alias['@achingbrain/nat-port-mapper'] = false;
    }
    return config;
  },
};
module.exports = nextConfig;
