module.exports = {
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.coffee$/,
      use: ['coffee-loader'],
    })

    const newRule = {
    test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
    use: [
      {
        loader: 'C:\\work\\Project\\VueJS\\Fundamentals\\build-a-bot\\node_modules\\url-loader\\dist\\cjs.js',
        options: {
          limit: 5000,
          fallback: {
            loader: 'C:\\work\\Project\\VueJS\\Fundamentals\\build-a-bot\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        },
      },
    ],
  };
  const imagesRuleIndex = config.module.rules.findIndex((x) => x.test.source.includes('png|jpe?g|gi'));
  config.module.rules.splice(imagesRuleIndex, 1, newRule);
},
  
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        // pathRewrite: { "^/api/": "/api/" },
        // ws: true,
        changeOrigin: true,
        logLevel: "debug"
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  }
}