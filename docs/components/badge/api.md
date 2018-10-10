---
imports:
  '{ Badge, Button }': 'amazeui-touch'
---

# Badge

用于角标等辅助提示信息的组件。

## 默认

```demo
<Badge text="default" />
```

## 色彩配置

使用 amStyle 配置色彩：

```demo
<Badge amStyle="primary" text="primary" />
<Badge amStyle="success" text="success" />
<Badge amStyle="secondary" text="secondary" />
<Badge amStyle="warning" text="warning" />
<Badge amStyle="alert" text="alert" />
```

## 圆角

使用 rounded 设置为圆角：

```demo
<Badge amStyle="primary" text="primary" rounded />
```

## 设置图标

```demo
<Badge amStyle="primary" rounded icon="elect" />

<br />

<Badge amStyle="primary" icon="elect" />
```

## 小圆点

设置小圆点模式：

```demo
<Badge amStyle="alert" rounded />
```

## 包裹容器

```demo
<Badge amStyle="alert" rounded text="1">
  <Button amStyle="primary" hollow>
    按钮
  </Button>
</Badge>
<Badge amStyle="alert" rounded>
  <Button amStyle="primary" hollow>
    按钮
  </Button>
</Badge>
```


## API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `component`        | `node`        | `span`          | 组件使用的元素。    |
| `href`             | `string`      |                 | 如果设置 `href` 属性将忽略 `component` 属性，渲染为 `<a>`。|
| `text`          |   `string`       |         | 设置 Badge 内内容 |
| `icon`          |   `string`       |         | icon name text 则会忽略 icon）|
| `amStyle`          | `string`      |         | 颜色样式。可选值：`enum('primary', 'secondary', 'success', 'warning', 'alert', 'dark')` |
| `rounded`          |  `bool`       | false   |  是否应用椭圆样式。


> 注意：
Badge 提供两种模式

- 不设置 chidren： 表现为普通的标签 
- 设置 children： 表现为 children 的容器，显示在右上角。并且默认提供 1em 的右外边距。开发者可自定义设置样式。




## 示例
