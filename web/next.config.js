const nextConfig = {
    output: 'standalone',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgo: false
                    }
                }
            ],
        });

        return config;
    },
}

module.exports = nextConfig