// Note that this config is used for `build` but not for `storybook` or `build-storybook` scripts

const SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;

const configureWebpack = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  devtool: false,
  node: false,
  plugins: [
    new SourceMapDevToolPlugin({
      // equivalent to devtool: 'source-map'; just that we don't generate sourcemaps for translation files as they
      // contain no actual mappings when generated.
      filename: '[name].js.map',
      namespace: 'NimiqVueComponents',
      exclude: /lang-.*-json\.js/,
    }),
  ],
};

if (process.argv.includes('build')) {
  configureWebpack.externals = {
    'vue': 'vue',
    'vue-class-component': 'vue-class-component',
    'vue-property-decorator': 'vue-property-decorator',
  };
  configureWebpack.mode = 'production';
  configureWebpack.optimization = {
    providedExports: true,
    usedExports: true,
    sideEffects: true,
  };
}

const chainWebpack = config => {
  const svgRule = config.module.rule('svg');
  const svgDefaultHandler = svgRule.uses.values()[0];
  svgRule.uses.clear();

  config.module
    .rule('svg')
      // Add new icon SVG rule
      .oneOf('icons')
        .test(/icons/)
        .use('vue-svg-loader')
          .loader('vue-svg-loader')
          .options({ svgo: false })
          .end()
        .end()
      // Re-add default SVG rule
      .oneOf('default')
        .use()
          .loader(svgDefaultHandler.get('loader'))
          .options(svgDefaultHandler.get('options'))
          .end()
        .end();
}

module.exports = { configureWebpack, chainWebpack };
