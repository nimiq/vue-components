const { resolve } = require('path');

const configureWebpack = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  }
}

if (process.argv.includes('build')) {
  configureWebpack.externals = {
    'vue': 'vue',
    'vue-class-component': 'vue-class-component',
    'vue-property-decorator': 'vue-property-decorator',
  };
}

module.exports = { configureWebpack };
