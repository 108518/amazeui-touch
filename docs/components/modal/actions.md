---
imports:
  '{ Modal, Button, List }': 'amazeui-touch'
---

## actions 模拟

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
          role="actions"
          isOpen={this.state.isModalOpen}
          onDismiss={this.closeModal}
        >
            <div className="modal-actions-group">
              <List>
                <List.Item className="modal-actions-header">分享到</List.Item>
                <List.Item>微信</List.Item>
                <List.Item className="modal-actions-alert">
                  Twitter</List.Item>
              </List>
            </div>
        </Modal>
      </div>
    );
  }
 }
```
