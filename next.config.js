const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withImages = require('next-images')

module.exports = withImages();

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

]);