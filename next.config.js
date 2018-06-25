const {NOW_URL} = process.env
const {alias} = require('./now.json')

module.exports = {
  assetPrefix: NOW_URL ? `https://${alias}` : 'http://localhost:3000',
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
