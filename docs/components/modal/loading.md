---
imports:
  '{ Modal, Button }': 'amazeui-touch'
---

## loading 模拟

```demo
class extends React.Component {
  state = {
    isModalOpen: false,
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal= () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    return (
      <div>
        <Button
          amStyle="primary"
          onClick={this.openModal}
        >
          打开模态框
        </Button>
        <Modal
          title="标题"
          role="loading"
          isOpen={this.state.isModalOpen}
          onDismiss={this.closeModal}
        />
      </div>
    );
  }
 }
```
