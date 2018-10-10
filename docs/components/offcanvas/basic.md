---
imports:
  '{ OffCanvas, Button }': 'amazeui-touch'
---

## 默认

```demo
class extends React.Component {

  state = {
    isOpen: false,
  }

  handleOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleChange = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onOpen = () => {
    console.log("[OffCavas] onOpen callback...")
  }

  onClosed = () => {
    console.log("[OffCanvas] onClosed callback...")
  }

  render() {
    return (
      <div>
          <Button 
            onClick={this.handleChange}
            amStyle="primary">左侧显示 OffCanvas
          </Button>

          <OffCanvas
            isOpen={this.state.isOpen}
            onDismiss={this.handleChange}
            onOpen={this.onOpen}
            onClosed={this.onClosed}
          >
            content
          </OffCanvas>
      </div>
    );
  }
}
```
