const TerserPlugin = require("terser-webpack-plugin");

module.exports = (storybookBaseConfig, env, config) => {
    // Save and remove default SVG rule to add a custom one below
    const svgRule = config.module.rules.find(rule => rule.test.toString().includes('svg'));
    config.module.rules = config.module.rules.filter(rule => !rule.test.toString().includes('svg'));

    return {
        ...config,
        plugins: [...config.plugins, new (require('vue-loader/lib/plugin'))()],
        module: {
            ...config.module,
            rules: [...config.module.rules, {
                test: /\.tsx?$/,
                loader: require.resolve('ts-loader'),
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                }
            }, {
                test: svgRule.test,
                oneOf: [{
                    // Add new icon SVG rule
                    test: /icons/,
                    loader: 'vue-svg-loader',
                    options: { svgo: false }
                }, {
                    // Re-add default SVG rule
                    loader: svgRule.loader,
                    options: svgRule.options
                }],
            }]
        },
        resolve: {
            ...config.resolve,
            extensions: [...config.resolve.extensions, '.ts', '.tsx']
        },
        optimization: config.mode === 'development' ? config.optimization : {
            ...config.optimization,
            // adapted from the default from node_modules/webpack/lib/WebpackOptionsDefaulter.js by adding
            // keep_classnames. Note that in newer Webpack versions the default looks different and is in
            // webpack/lib/config/defaults.js.
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    terserOptions: {
                        keep_classnames: true,
                    },
                }),
            ],
        }
    };
};
