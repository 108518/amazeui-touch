---
imports:
  '{ OffCanvas, Button }': 'amazeui-touch'
---

## push 动画

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

  render() {
    return (
      <div>
        <h2>Overlay</h2>

          <Button 
            onClick={this.handleChange}
            amStyle="primary">左侧显示 OffCanvas
          </Button>

          <OffCanvas
            pageContainer="#root"
            animation="push"
            isOpen={this.state.isOpen}
            onDismiss={this.handleChange}
          >
            content
          </OffCanvas>
      </div>
    );
  }
}
```
