##### **学习笔记01**
~~~~
webpack-dev-server会跟 webpack.config.js 文件入口去寻找并处理静态资源然后根据出口来生成(emit)包(bundle)
entry属性: 指定 webpack 应该使用哪个模块作为构建内部依赖图的开始,进入入口起点之后,webpack会找出有哪些模块和库是入口起点的直接或间接依赖
output属性: 我们通过 output.filename 和 output.path 属性，来告诉 webpack bundle 的名称，以及我们想要 bundle 生成(emit)到哪里