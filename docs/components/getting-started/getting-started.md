# 开始使用

> 整个文档及文档演示都在逐步的更新中，如果有任何问题，请直接反馈哟。对文档的展示以及表述方面，有任何意见，也欢迎提哦。

## Studio

目前主要使用环境是 Studio, 组件设计方向也在往这个方向走，对此有改进意见也可直接反馈。

在 **Studio** 环境下使用时，请直接下载 dist 包，在 Studio 内的第三方依赖中添加:

- amazeui.touch.js
- amazeui.touch.css

若需要使用字体图标，确认 fonts 目录存在于当前项目下。

如下图所示：

<img src="https://t2.amazeui.org/imgs/import.png" />




## 使用

在 Studio 自定义组件中使用时, 以 **AMUITouch2** 这个全局变量访问组件：

```jsx
const { Button } = AMUITouch2
```


**相关项目**：

- [React 官网](https://reactjs.org)（v16.0+）
- [Sass](http://sass-lang.com/)：Amaze UI Touch 样式使用 Sass 编写，如需深入二次开发，应当知道如何使用 Sass。


------

## npm 安装 Amaze UI Touch

本地使用，Codesandbox 等使用时：

```bash
npm install --save-dev amazeui-touch2
```


## Hello World

### HTML

**CSS 文件**

打包的 CSS 文件 `amazeui.touch.css`、`amazeui.touch.min.css` 位于 `node_modules/amazeui-touch2/dist` 下，可以通过以下两种方式引入：

- 直接使用 `<link>` 标签在 HTML 中引入；
- 如果使用支持 CSS 打包的构建工具（如 Webpack），可以直接在入口 JS 中 `import` 样式：

  ```javascript
  import 'amazeui-touch2/dist/amazeui.touch.min.css';
  ```

```html
<!DOCTYPE html>
<html>
<head lang="zh-cn">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Amaze UI Touch</title>
  <meta name="renderer" content="webkit">
  <!-- No Baidu Siteapp-->
  <meta http-equiv="Cache-Control" content="no-siteapp">
  <link rel="alternate icon" type="image/png" href="i/favicon.png">
  <link rel="apple-touch-icon-precomposed" href="i/app-icon72x72@2x.png">
  <meta name="apple-mobile-web-app-title" content="AMUI React">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="stylesheet" href="path/to/amazeui.touch.min.css">
</head>
<body>
  <div id="root">
  </div>
  <!-- app.js 为上面的代码编译打包后的文件 -->
  <script src="app.js"></script>
</body>
</html>
```

#### JavaScript:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
} from 'amazeui-touch2';

ReactDOM.render(<Button>Hello World</Button>, document.getElementById('root'));
```


### 全局方式引用

如果基于使用公共 CDN 或者维护方便等原因考虑，不想把 Amaze UI Touch 打包到项目文件中，可以以全局方式引用，即在 HTML 中引入 `amazeui.touch.min.js` 文件，然后以 **`AMUITouch`** 这个全局变量访问组件。

如果使用 Webpack 构建，则可以在配置文件中做设置，比如下面的配置中，React 和 Amaze UI Touch 将以全局的方式调用，不会打包到你的项目中（即需要单独引入）。

```javascript
// ...
externals: {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'amazeui-touch': 'AMUITouch',
}
// ...
```


### 进阶使用

进阶使用细节可参考 [kitchen-sink 源码](https://github.com/amazeui/amazeui-touch/tree/master/kitchen-sink)以及 [Amaze UI Touch Starter Kit](https://github.com/amazeui/amt-starter-kit)。

[debug]: http://www.zhihu.com/question/37361845


## 兼容性

### CSS

- [Flexbox](http://caniuse.com/#feat=flexbox)

  Amaze UI Touch 完全基于 flexbox 布局。
- [CSS3 Transitions](http://caniuse.com/#feat=css-transitions)
- [CSS Animation](http://caniuse.com/#feat=css-animation)

### JavaScript

- ES5: Amaze UI Touch 基于 ES2015+ 编写，使用 Babel.js 转换为 ES5；
- React.js: React 16.0+。

