---
imports:
  'Basic': './basic'
  'Push': './push'
---

# OffCanvas

侧边栏组件。

**OffCanvas 为受控组件，开发者通过设置 `isOpen` 的值控制是否打开侧边栏。**


```run
<Basic />
<Push />
```


## &lt;OffCanvas&gt;


| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `isOpen`           | `bool`        |  `false`        | 侧边栏是否打开     |
| `onDimiss`         | `func`        |                 | 点击遮罩层时触发此函数， 若需要通过遮罩层关闭侧边栏，就必须设置此回调函数来关闭。 |
| `placement`        | `left`        |                 | 侧边栏位置。 `enum('left', 'right')` |
| `animation`        | `slide`       |                 | 动画效果。   `enum('slide', 'push')` |
| `pageContainer`    |  `node`       |                 | 使用 `push` 动画效果时，侧边栏「推」的容器（一般为 SPA 的容器），可以传递容器 `id` 或者 容器 React 组件实例。 |
| `onOpen`           |   `func`      |                 | 侧边栏打开时的回调函数。 |
| `onClosed`         |   `func`      |                 | 侧边栏关闭以后的回调函数。 |
| `style`            |   `obj`       |                 | 侧边栏容器样式        |
| `className`        |   `string`    |              | 侧边栏容器类名        |

## 方法

### OffCanvas 的实例

| 名称                |  描述           |
| -------------      | ------------- | 
| `.open()`          | 打开侧边栏。    |
| `.close()`         | 关闭侧边栏。    |


## 示例
