// next.config.js
//默认配置



const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
});
