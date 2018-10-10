---
imports:
  '{ Loader }': 'amazeui-touch'
---

# Loader

加载图标。用于指示加载或者等待过程，但需要控制其显示和消失的时机。


## 默认

```demo
<Loader />
```

## 直角设置

直角设置：

```demo
<Loader rounded={false} /> 
```

## 色彩设置

色彩设置

```demo
<Loader amStyle="primary" /> 
```

### &lt;Loader&gt;

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `component`        | `node`        | `'div'`         |  组件使用的元素。   |
| `amStyle`          | `string`      |                 |  颜色样式，默认为灰色。enum('primary', 'secondary', 'success', 'warning', 'alert', 'dark', 'white') |
| `rounded`          | `bool`        | `true`         | 是否应用圆形样式，默认为方形。|


## 示例
