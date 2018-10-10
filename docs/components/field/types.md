---
imports:
  '{ Field }': 'amazeui-touch'
---

### 不同类型的 Input

使用 `type` 设置输入框类型，`select` 使用系统样式：

```demo
<Field
  label="用户名"
  placeholder="输入用户名"
/>

<Field label="用户密码" placeholder="输入密码" type="password" />

<Field
  label="年龄"
  placeholder="输入年龄"
  type="number"
  tip="(数字)"
/>

<Field label="Switch" type="switch" single defaultChecked />

<Field
  label="下拉 Select"
  type="select"
  defaultValue="m"
>
  <option value="m">电脑</option>
  <option value="f">手机</option>
</Field>

<Field
  label="文本框"
  placeholder="维尔纳·海森堡的矩阵力学和埃尔温·薛定谔的波动力学"
  type="textarea"
  rows={4}
/>

<br />

<Field
  value="提交"
  type="submit"
  amStyle="primary"
  block
/>
```
