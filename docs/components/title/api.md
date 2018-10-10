---
imports:
  '{ Title, Icon }': 'amazeui-touch'
---

# Title

标题组件。一般用来设置一个独立区域的标题。

## 基础


```demo
<Title>我是标题</Title>
```

## 样式配置

使用 amStyle 配置 title 颜色
```demo
<Title amStyle="primary">primary</Title>
<Title amStyle="secondary">secondary</Title>
<Title amStyle="success">success</Title>
<Title amStyle="warning">warning</Title>
<Title amStyle="alert">alert</Title>
<Title amStyle="dark">dark</Title>
```

使用 amSize 配置 title 颜色
```demo
<Title amSize="xl">我是 xl 标题</Title>
<Title amSize="lg">我是 lg 标题</Title>
<Title amSize="sm">我是 sm 标题</Title>
<Title amSize="xs">我是 xs 标题</Title>
```

## icon 设置

icon 支持图片链接，自定义组件：

```demo
<Title icon="http://s.amazeui.org/assets/react/i/favicon.png">我是标题</Title>
<Title icon={<Icon name="search" />}>我是标题</Title>
<Title icon={<a href="#">返回</a>}>我是标题</Title>
```


## 右侧元素设置

使用 more 设置右侧元素：

```demo
<Title more={<Icon name="more-l" />}>我是标题</Title>
<Title
  more={[
    <a href="javascript:void(0);">更多1</a>,
    <a href="javascript:void(0);">更多2</a>
  ]}
>
  我是标题
</Title>
```


## API


| 属性          | 类型           | 默认值           | 含义                                      |
| ------------- | ------------- | --------------- | ---------------------------------------- |
| `amStyle`     | `string`              |     | 标题颜色样式，可选值：'primary', 'secondary', 'success', 'warning', 'alert', 'dark' |
| `amSize`      | `string`              |     | 标题大小，可选值：'xs'、'sm'、'lg'、'xl'  |
| `icon`        | `string`&#124;`node`  |     | 标题图标（左侧）。可以是图片的 URL，也可以是自定义的组件。 |
| `more`        | `array`&#124;`node`   |     | 标题更多区域（右侧）。可传入单个组件，也可以以数组的方式传入多个组件。 |


## 示例
