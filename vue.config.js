const { resolve } = require('path');

const configureWebpack = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  }
}

module.exports = { configureWebpack };
