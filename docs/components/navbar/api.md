---
imports:
  '{ NavBar }': 'amazeui-touch'
---

# NavBar

导航条组件。

## 基础

`title` `leftNav` `rightNav` 数据结果见代码：

```demo
<NavBar 
  title="日常报销" 
  leftNav={[{
    href: "http://google.com",
    title: "返回",
    icon: "left"
  }]}
  rightNav={[{
    href: "#",
    title: "保存",
    icon: "right"
  }]}
/>
```

## 色彩配置

使用 `amStyle` 处理事件：

```demo
<NavBar
  amStyle="primary"
  title="日常报销" 
  leftNav={[{
    href: "http://google.com",
    title: "返回",
    icon: "left"
  }]}
  rightNav={[{
    href: "#",
    title: "保存",
    icon: "right"
  }]}
/>
```

## 事件处理

使用 `onAction` 处理事件，详情查看控制台：

```demo
class extends React.Component {
  onAction = (item, e) => {
    e.preventDefault()
    console.log(item)
  }

  render() {
    return (
      <NavBar 
        title="日常报销" 
        leftNav={[{
          href: "http://google.com",
          title: "返回",
          icon: "left"
        }]}
        rightNav={[{
          href: "#",
          title: "保存",
          icon: "right"
        }]}
        onAction={this.onAction}
      />
    )
  }
}
```


## API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `title`            | `node`        |                 | NavBar 主标题。  |
| `leftNav`          | `array`       |                 | 左侧链接数据。    |
| `rightNav`         | `array`       |                 | 右侧链接数据，格式同上。 |
| `titleOnLeft`      | `bool`        |    false        | 主标题是否居左，默认居中。 |
| `onAction`         | `func`        |                 | 链接点击时的处理函数，第一个参数为链接数据对象。 |
| `amStyle`          | `string`      |                 | 设置背景颜色       |


左右两侧链接数据，格式为：

```javascript
const leftNav = [
  {
    component: 'a', // 默认为 `a`
    title: 'Left',
    href: '',
    customIcon: '', // 自定义图标 URL
    icon: '', // 图标名称，如果设置了自定义图标，则 `icon` 失效
    isClone: false, // 可选，如果 component 为 OffCanvasTrigger 之类的组件时，设为 true
    onXXX: () => {}, // 可选，React 事件绑定
    style: {}, // 可选，内联样式
    className: '', // 可选，样式类名
    //... 其他属性
  },
];
```

## 示例
