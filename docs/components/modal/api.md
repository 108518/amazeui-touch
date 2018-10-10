---
imports:
  '{ Modal, Button }': 'amazeui-touch'
  'Basic': './basic'
  'Alert': './alert'
  'Confirm': './confirm'
  'Loading': './loading'
  'Actions': './actions'
---

# Modal

模态框组件，用于弹出内容，实现 alert、confirm、prompt、loading、actions、popup 等效果。

```run
<Basic />
<Alert />
<Confirm />
<Loading />
<Actions />
```


具体演示请直接查看示例部分。


### &lt;Modal&gt;

| 属性          | 类型           | 默认值           | 含义                                      |
| ------------- | ------------- | --------------- | ---------------------------------------- |
| `role`             | `string` |             | 模态框角色。可选值：`'alert', 'confirm', 'prompt', 'loading', 'actions', 'popup', 'page'`，不设置时为普通的模态窗口。 |
| `isOpen`           | `bool`   | `false`     | 模态框是否为打开状态。 |
| `title`            | `node`   |             | 模态框标题。 |
| `confirmText`      | `string` | `'确定'`     | 模态框确定按钮文字。 |
| `cancelText`       | `string` | `'取消'`     | 模态框取消按钮文字。 |
| `closeBtn`         | `bool`   | `true`      | 是否显示关闭按钮。 |
| `closeViaBackdrop` | `bool`   | `true`      | 是否点击遮罩层关闭。 |
| `onAction`         | `func`   |             | 用户点击「确定」或「取消」按钮时的回调函数。 |
| `onOpen`           | `func`   |             | 模态框打开时的回调函数。 |
| `onClosed`         | `func`   |             | 模态框关闭后的回调函数。 |
| `onDismiss`        | `func`   |             | 模态框请求关闭时的回调函数。 |
| `header`           | `node`   |             | 模态框标题栏。仅当 `role` 为 `page` 时可用。 |
| `footer`           | `node`   |             | 模态框底部栏。仅当 `role` 为 `page` 时可用。 |


## 方法

目前不可用。

* ~~**`open`** 打开模态框。~~

* ~~**`close`** 关闭模态框。~~


## 示例
