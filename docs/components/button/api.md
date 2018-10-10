---
imports:
  'Basic': './basic.md'
  'ColorBtn': './color-button.md'
  'LinkBtn': './link-button.md'
  'SizeBtn': './size-button.md'
  'OtherBtn': './other-button.md'
  'StatusBtn': './status-button.md'
---

# Button

按钮组件。用于响应用户的点击行为：触发事件或者跳转链接。


```run
<Basic />
<br />
<StatusBtn />
<br />
<SizeBtn />
<br />
<ColorBtn />
<br />
<OtherBtn />
<br />
<LinkBtn />
```


## API

| 属性          | 类型           | 默认值           | 含义        |
| ------------- | ------------- | --------------- | ---------------------------------------- |
| `component`    | `node`    | `<button>` | 组件使用的元素 |
| `href`         | `string`  |            | 如果设置 `href`，则渲染为 `<a>`。 |
| `target`       | `string`  | `<button>` | 设置为 `href` 以后可以设置链接打开方式。 |
| `amStyle`      | `string`  |            | 按钮颜色样式。 |
| `amSize`       | `string`  |            | 按钮尺寸。可选值：`'xs'`、`'sm'`、`'lg'`、`'xl'` |
| `square`       | `bool`    | `false`    | 是否设置为直角。 |
| `rounded`      | `bool`    | `false`    | 是否设置为园角。 |
| `hollow`       | `bool`    | `false`    | 是否应用「镂空」样式。 |
| `block`        | `bool`    | `false`    | 是否应用块级样式。 |
| `active`       | `bool`    | `false`    | 是否应用「激活」样式。 |
| `disabled`     | `bool`    | `false`    | 是否应用「禁用」样式。 |


## 示例
