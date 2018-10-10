---
imports:
  '{ Icon }': 'amazeui-touch'
---


# Icon

图标组件。

## 说明

图标库为 UED 部门根据项目中出现的 icon 总结而出。

命名规则参考：

- 名称应该是具体的，不带感情色彩的。（即像什么就叫什么）
- line 表示线条，简写为 `l`
- square 表示直角，简写为 `s`
- circle 表示圆角，简写为 `c`
- up down left right 表示方向，不可简写
- 修饰词统一作为后缀出现

示例：

```md
权重示例： 
名称 > 方向 > 线条 > 直角/圆角
arrow-right-l-s

名称示例：
心形图标命为 heart 而不应该是 like 等带有感情色彩的词。
```


## API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `component`        | `node`        | `'span'`        | 组件使用的元素。   |
| `href`             | `string`      |                 | 如果设置 `href` 属性将忽略 `component` 属性，渲染为 `<a>`。 |
| `name`             | `string`      |                 | 图标名称。 可选图标名称参考下方。图标样式查看下方 `Demo`。 |


```demo
<Icon name="sunny" />
<Icon name="sunny2" />
<Icon name="sunny3" />
<Icon name="sunny4" />
```


[1]: https://github.com/twbs/ratchet/tree/master/fonts
[2]: http://fontawesome.io/icons/
[3]: https://icomoon.io/app/#/select
[4]: http://iconfont.cn/

## 示例
