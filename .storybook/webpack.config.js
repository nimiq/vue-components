const path = require('path');

module.exports = (storybookBaseConfig, env, config) => {
    return {
        ...config,
        plugins: [...config.plugins, new (require('vue-loader/lib/plugin'))()],
        module: {
            ...config.module,
                                           // Remove default SVG rule to add a custom one below
            rules: [...config.module.rules.filter(rule => !rule.test.toString().includes('svg')), {
                test: /\.tsx?$/,
                loader: require.resolve('ts-loader'),
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                }
            }, {
                test: /\.(svg)(\?.*)?$/,
                oneOf: [{
                    test: /icons/,
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: filePath => `nq-${path.basename(filePath, '.svg')}`
                    }
                }, {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }],
            }]
        },
        resolve: {
            ...config.resolve,
            extensions: [...config.resolve.extensions, '.ts', '.tsx']
        }
    };
};
