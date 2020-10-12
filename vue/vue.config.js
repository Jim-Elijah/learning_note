module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: '',
        changeOrigin: true
      },
    }
  }
}