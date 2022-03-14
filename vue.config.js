const path = require('path')

module.exports = {
  // 1.配置方式1:CLI提供的属性
  outputDir: './build',
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
  }
}
