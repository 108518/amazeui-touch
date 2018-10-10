---
imports:
  '{ Field }': 'amazeui-touch'
---


### 基础

默认样式的输入框，type 为 `text`

```demo
<Field  />
```

使用 `label` 配置输入框前的文字, 默认独占一行：

```demo
<Field
  label="用户名"
  placeholder="输入用户名"
/>
```

使用 `single` 设置输入框和 label 在同一行：

```demo
<Field
  label="用户名"
  placeholder="输入用户名"
  single
/>
```

使用 `underline` 设置 Field 下划线样式：

```demo
<Field
  label="用户名"
  placeholder="整行显示下划线"
  underline="full"
  single
/>
<Field
  label="用户名"
  placeholder="只显示在输入框下"
  underline="part"
  single
/>
```

使用 `tip` 设置提示性文字：

```demo
<Field
  label="用户名"
  placeholder="输入用户名"
  tip="tip here"
  single
/>
```
