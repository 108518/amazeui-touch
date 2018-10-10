---
imports:
  '{ Popover, PopoverTrigger, Button }': 'amazeui-touch'
---

# Popover

气泡式的弹出框组件。


## 默认

```demo
<PopoverTrigger
  popover={
    <Popover>
      <p>Popover 内容</p>
    </Popover>
  }
>
  <Button amStyle="primary">显示 Popover</Button>
</PopoverTrigger>
```


### &lt;Popover&gt; API
 
| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `onDismiss`        |  `func`       |        | 关闭 Popover 调用的函数。  |
| `defaultActive`    |  `bool`       |        | 是否默认打开 Popover。  |
| `placement`        |               |       | Popover 位置。**目前的实现是根据 `<PopoverTrigger>` 在窗口中的位置自动计算，暂不支持自定义。** `enum('top', 'bottom', 'horizontal')` |


TODO: 

- 支持自定义弹出框的位置
- 支持弹出框大小属性配置
- 支持去除遮罩层


### &lt;PopoverTrigger&gt; API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `popover`          |               |                 | 要控制的 Popover 实例，**必需**。 |
| `onOpen`           |  `func`       |                 | Popover 打开时的回掉函数。 |
| `onClosed`         |  `func`       |                 | Popover 关闭以后的回掉函数。 |

## 方法

### PopoverTrigger 的实例

| 名称                |  描述           |
| -------------      | ------------- |
| `.open()`          |  打开 Popover。|
| `.close()`         |  关闭 Popover。 |


## 示例
