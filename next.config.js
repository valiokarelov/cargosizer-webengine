/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration for Three.js
  webpack: (config, { isServer }) => {
    // Handle Three.js on client side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
        os: false,
      }
    }
    
    // Handle .glb, .gltf, and other 3D model files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    })
    
    return config
  },
  
  // Image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  swcMinify: true,
}

module.exports = nextConfig