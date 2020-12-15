
const path = require('path')
module.exports = {
  assetsDir: 'static',
  filenameHashing: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // entry: 'src/entry-server.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '云音乐',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  css: {
    loaderOptions: {
      css: {
        // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
        // Vue CLI v3 用户可参考 css-loader v1 文档
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        localsConvention: 'camelCaseOnly'
      },
      // sass: {
      //   // @/ 是 src/ 的别名
      //   // 所以这里假设你有 `src/variables.sass` 这个文件
      //   // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      //   prependData: `@import "~@/styles/variables.sass"`
      // },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      // scss: {
      //   prependData: `@import "~@/styles/variables.scss";`
      // }
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/*/*.vue'),
        path.resolve(__dirname, './src/styles/*.less')
      ]
    },
    'sass-resources-loaderr': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/*/*.vue'),
        path.resolve(__dirname, './src/styles/*.scss')
      ]
    },
    electronBuilder: {
      nodeIntegration: true
    }
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 8008,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true,
    //     headers: {
    //       cookie
    //     }
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // }
  }
}
