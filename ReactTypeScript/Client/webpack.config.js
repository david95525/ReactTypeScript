const path = require('path');


module.exports = {
    mode:"production",
    devtool: 'source-map',
    entry: {
        main: './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: '[name].bundle.prod.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "img/[name].[hash:8].[ext]"
                        },
                    },
                ],
            },
            {
                test: /\.svg/,
                use: [
                    // 配置 loader (第一步)
                    {
                        loader: "file-loader",
                        options: {
                            // 配置 name 屬性 (第二步)
                            name: "img/[name].[hash:8].[ext]",
                        },
                    },
                ]
            }
        ]
    }
};