module.exports = {
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
    // devServer: {
    //     port: 8085, // 端口号
    //     host: 'localhost',
    //     https: false, // https:{type:Boolean}
    //     open: true, //配置自动启动浏览器
    //     // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    //     proxy: {
    //         '/user': {
    //             target: '127.0.0.1:3000',
    //             ws: true,
    //             changeOrigin: true
    //         },
    //         '/foo': {
    //             target: '<other_url>'
    //         }
    //     },  // 配置多个代理
    // }
}
