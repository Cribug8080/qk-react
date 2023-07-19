const packageName = require('./package.json').name;

console.log('packageName', packageName)

module.exports = {
  // ...
  webpack: {
    configure: {
      entry: './src/index.js',
      output: {
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        // jsonpFunction: `webpackJsonp_${packageName}`,
        // chunkLoadingGlobal: `webpackJsonp_${packageName}`,
      },
    }
  },
};