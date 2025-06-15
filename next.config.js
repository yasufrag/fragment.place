// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const path = require('path')

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
})