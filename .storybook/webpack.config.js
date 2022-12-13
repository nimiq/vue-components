// Fix build for Node version with OpenSSL 3
const crypto = require('crypto');
const origCreateHash = crypto.createHash;
crypto.createHash = (alg, opts) => {
    return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
};

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
        }
    };
};
