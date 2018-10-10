---
imports:
  '{ Notification, Button }': 'amazeui-touch'
---

# Notification

通知组件，用于显示通知信息。


## 默认


```demo
class extends React.Component {
  state = {
    visible: false,
  }
  openNotification = () => {
    this.setState({
      visible: true,
    })
  }
  closeNotification = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Notification
          title="测试标题"
          visible={this.state.visible}
          animated
          onDismiss={this.closeNotification}
        >
          这是一个动态显示的通知 :)
        </Notification>
        <Button
            onClick={this.openNotification}
            disabled={this.state.visible}
            amStyle="primary"
          >
            显示通知栏
          </Button>

          <Button
            onClick={this.closeNotification}
            disabled={!this.state.visible}
            amStyle="alert"
          >
            关闭通知栏
          </Button>
      </div>
    )
  }
}
```

### &lt;Notification&gt;

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `title`            | `node`        |                 | 通知标题，如无特殊需求，一般无须设置。 |
| `amStyle`          | `string`      |                 | 通知样式，默认为黑色。`enum('primary', 'secondary', 'success', 'warning', 'alert')`      |
| `closeBtn`         |  `bool`       |  true           | 是否显示关闭按钮。  |
| `animated`         |  `bool`       |  true           | 打开、关闭是否显示动画效果。 |
| `visible`          |  `bool`       |  true           | 通知栏是否可见，使用时 `visible` 为 `true` 打开通知，否则关闭。 |
|  `static`          |  `bool`       |  false          | 是否渲染为静态的通知栏。  |
| `onDismiss`        |  `func`       |                 | 点击「关闭」按钮时的处理函数。 |


## 示例
