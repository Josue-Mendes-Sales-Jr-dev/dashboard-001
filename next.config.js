

/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.pexels.com']
},
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
}

module.exports = nextConfig
