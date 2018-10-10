---
imports:
  '{ Field, Icon, Button }': 'amazeui-touch'
---

### 输入框组

不设置 `label` 显示为输入框组，可以配置： `labelBefore` `labelAfter` `btnAfter`


```demo
<Field
  placeholder="You domain."
  labelBefore="www."
  labelAfter=".com"
/>

<Field
  placeholder="Your email."
  labelBefore={<Icon name="user-l" />}
  btnAfter={<Button>Subscribe</Button>}
/>

<Field
  placeholder="Keywords..."
  labelBefore={<Icon name="search" />}
  btnAfter={<Button amStyle="primary">Search</Button>}
/>
```
