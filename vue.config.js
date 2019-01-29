const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
  assetsDir: "static",
  productionSourceMap: false,
  outputDir: 'foodSassAdmin',
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
  },
  lintOnSave: false,
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    }
    config.externals = {
      'vue': 'Vue',
      'axios': 'axios',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      // 'element-ui': 'ELEMENT',
      // 'vue-i18n': 'VueI18n',
    }
  },
  chainWebpack: config => {
    // 一个规则里的 基础Loader
    // svg是个基础loader
    const svgRule = config.module.rule('svg')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}