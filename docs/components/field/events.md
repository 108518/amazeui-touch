---
imports:
  '{ Field }': 'amazeui-touch'
---

### 响应事件

打开控制台查看事件响应：

```demo
class extends React.Component {

  onFocus = (e) => {
    console.log("Focus: ", e)
  }

  onBlur = (e) => {
    console.log("Blur: ", e.type)
  }

  onChange = (e) => {
    console.log("Change: ", e.target.value)
  }

  render() {
    return (
      <Field
        label="用户名"
        single
        placeholder="输入用户名"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    )
  }
}
```
