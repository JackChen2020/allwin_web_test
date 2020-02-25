

const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

//开发环境
// const ServerUrl = "http://127.0.0.1:8000"

// 测试环境
// const ServerUrl = "http://47.244.129.198"

// 生产环境
const ServerUrl = "http://47.75.120.33"

module.exports = {
    // 基本路径
    publicPath: '/test',

    outputDir: 'dist',

    lintOnSave: false,

    chainWebpack: (config)=>{
        //修改文件引入自定义路径
        config.resolve.alias
            .set('~', resolve('src'))
    },
    configureWebpack: {
    },
    productionSourceMap: false,

    css: {

        extract: true,
        sourceMap: true,
        loaderOptions: {},
        modules: false
    },

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                // target: 'http://localhost:8000',
                target : ServerUrl,
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': '/api'//请求的时候使用这个api就可以
                }

            },
            '/upload': {
                target: ServerUrl,
                // target : 'http://allwin6666',
                changeOrigin: true,
                ws: false,
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}