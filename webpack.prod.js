const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        sentryWebpackPlugin({
            authToken: process.env.SENTRY_AUTH_TOKEN,
            org: 'matthieu-berthome',
            project: 'jellyfin-web',
            telemetry: false
        })
    ],
    mode: 'production',
    entry: {
        'main.jellyfin': './index.jsx',
        'serviceworker': './serviceworker.js'
    }
});
