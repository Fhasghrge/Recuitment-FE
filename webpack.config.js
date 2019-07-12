const path = require('path');

// 导入在内存中生成HTML页面的插件
// 只要是插件，都一定要放到plugins节点中去
// 这个插件的两个作用：
// 1. 自动在内存中根据指定页面生成一个内存的页面
// 2. 自动把打包好bundl.js追加页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new htmlWebpackPlugin({   // 创建一个在内存中生成HTML页面的插件
      template:path.join(__dirname,'./dist/index.html'),  // 指定模板页面，根据此页面生成内存中的页面
      filename:'index.html'  //指定生成页面的名称
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {
        // 注意：webpack处理第三方文件类型的过程：
        // 1.发现处理文件非JS文件，然后在配置文件中，查找有没有对应的第三方loader规则
        // 2.调用leader时，是从后往前调用的，调用完后就返回给webpack处理
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|gif|bmp|jpeg)$/,
        use:[
          // 在loader后面加 ? 可以传参
          // 当引用图片大于等于给定的limit值，则不会转为base64格式的字符串
          'url-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'url-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use:[
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use:[
          'xml-loader',
        ]
      },
      {
        test:/\.less$/,
        use:[
          'style-loader','css-loader','less-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader','css-loader','scss-loader'
        ]
      },
      {
        test:/\.js$/,
        use:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  },
  resolve:{
    alias:{ //修改 Vue 被导入时的路径
      // 'vue$':'vue/dist/vue.js'
    }
  }
};