// eslint-disable-next-line no-undef
module.exports = {
  //   webpack: {
  //     configure(webpackConfig) {
  //       if (webpackConfig.mode === 'production') {
  //         // 抽离公共代码，只在生产环境
  //         if (webpackConfig.optimization == null) {
  //           webpackConfig.optimization = {}
  //         }
  //         webpackConfig.optimization.splitChunks = {
  //           chunks: 'all', // 对所有的包都优化
  //           cacheGroups: {
  //             antd: {
  //               name: 'antd-chunk', // 指明单独抽离的包
  //               test: /antd/, // 包的引用路径
  //               priority: 100, // 优先级
  //             },
  //             reactDom: {
  //               name: 'reactDom-chunk',
  //               test: /react-dom/,
  //               priority: 99,
  //             },
  //             vendors: {
  //               // 第三方插件
  //               name: 'vendors-chunk',
  //               test: /node_modules/,
  //               priority: 98,
  //             },
  //           },
  //         }
  //       }
  //       return webpackConfig
  //     },
  //   },

  devServer: {
    port: 8000, // B 端，前端
    proxy: {
      '/api': 'http://localhost:3001', // Mock,所有/api 开头都指向http://localhost:3001
    },
  },
}
