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
  configureWebpack.externals = [
    {
      // These vue externals get translated into requires, e.g. require("vue-property-decorator")
      // Note that this default behavior will change in webpack 5 and these externals will then have to be refactored.
      'vue': 'vue',
      'vue-class-component': 'vue-class-component',
      'vue-property-decorator': 'vue-property-decorator',
      // Mark the lazy loaded qr scanner worker as external to avoid Webpack building a separate chunk for the worker,
      // which would need to be copied over to the consuming app manually during the app build step. Instead, we change
      // it to be a dynamic import from the app's node_modules which will then be handled during the app's build process
      // (as opposed to during the vue-components's build) and result in a separate chunk only at that step. Because it
      // is a dynamic import and webpack 4 doesn't really support external imports as async imports (see documentation
      // at https://v4.webpack.js.org/configuration/externals/), we do this in a hacky way to play well with webpack's
      // import handler __webpack_require__.t by marking the import promise as __esModule.
      // This external gets written to the generated chunk as specified here, e.g. `module.exports = Object.assign(
      // import('/node_modules/qr-scanner/qr-scanner-worker.min.js'), { __esModule: true });` Have a look at the
      // generated NimiqVueComponents.umd.js to see how this plays together.
      // Once the vue-components switch over to webpack 5, this can probably be refactored.
      './qr-scanner-worker.min.js': 'root Object.assign('
          + 'import(\'qr-scanner/qr-scanner-worker.min.js\'), { __esModule: true });',
    },
    // // Unfortunately, the language file chunks can not be externalized like the qr scanner worker because the imports
    // // are determined dynamically during runtime. The handler below successfully prevents webpack from generating
    // // chunks for the language files, but does not inject the dynamic import logic into the code bundle.
    // // Maybe this will be possible with webpack 5.
    // function (context, request, callback) {
    //   if (!context.endsWith('src/i18n') || !/^\.\/[a-z]{2}\/[^.]+\.json$/.test(request)) return callback();
    //   // It's a json translation file. Make them external, similar to the qr scanner worker, see above.
    //   callback('root Object.assign('
    //     + `import('${'/node_modules/@nimiq/vue-components/src/i18n' + request.substring(1)}'), { __esModule: true });`);
    // },
  ];
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
