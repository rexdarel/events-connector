module.exports = {
  presets: [
    ['@vue/app', {
      devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true
      }
    }]
  ]
}
