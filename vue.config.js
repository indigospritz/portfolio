const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://portfolio-fake-server.herokuapp.com',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' }
      }
    }
  }
})
// target: http://localhost:5000
