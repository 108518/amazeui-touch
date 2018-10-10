---
imports:
  '{ Button, ButtonGroup }': 'amazeui-touch'
---

# ButtonGroup

按钮组。


## 默认

默认样式的按钮组：

```demo
<ButtonGroup>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```

## 色彩设置

使用 `amStyle` 设置按钮组的颜色, 在 `Button` 上单独设置会覆盖父级的设置, 可设置的值包括： 

- primary 
- secondary 
- succss 
- warning 
- alert

```demo
<ButtonGroup amStyle="primary">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
<br />
<ButtonGroup amStyle="secondary">
  <Button>Left</Button>
  <Button amStyle="success">Center</Button>
</ButtonGroup>
```

## 幽灵按钮

使用 `hollow` 属性设置幽灵样式：

```demo
<ButtonGroup amStyle="primary" hollow>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```

## 大小设置

设置整个按钮组的大小，可设置的值包括：

- xs
- sm
- lg
- xl

```demo
<ButtonGroup amSize="xs">
  <Button amStyle="primary">Left</Button>
  <Button amStyle="primary">Center</Button>
  <Button amStyle="primary">Right</Button>
</ButtonGroup>
<br />
<ButtonGroup amSize="xl">
  <Button amStyle="primary">Left</Button>
  <Button amStyle="primary">Center</Button>
  <Button amStyle="primary">Right</Button>
</ButtonGroup>
```

## 带间隙的按钮组

使用 `gapped` 属性设置带间隙的按钮组：

```demo
<ButtonGroup gapped>
  <Button amStyle="primary">Left</Button>
  <Button amStyle="primary">Center</Button>
  <Button amStyle="primary">Right</Button>
</ButtonGroup>
```

## 宽度自适应

使用 `justify` 属性设置宽度自适应，可以和 `gapped` 组合使用 ：

```demo
<ButtonGroup amStyle="primary" justify>
  <Button>Left</Button>
  <Button>Right</Button>
</ButtonGroup>

<ButtonGroup amStyle="primary" justify>
  <Button square>Left</Button>
  <Button square>Center</Button>
  <Button square>Right</Button>
</ButtonGroup>

<ButtonGroup amStyle="primary" gapped justify>
  <Button square>Left</Button>
  <Button square>Center</Button>
  <Button square>Right</Button>
</ButtonGroup>
```


## 垂直堆叠

使用 `stacked` 属性设置垂直堆叠， 可以和 `gapped` 组合使用：

```demo
<ButtonGroup amStyle="primary" stacked>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
<span> </span>
<ButtonGroup amStyle="primary" gapped stacked>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```


## 属性


| 属性          | 类型           | 默认值           | 含义                                      |
| ------------- | ------------- | --------------- | ---------------------------------------- |
| `amStyle`      | `string`  |            | 按钮颜色样式。该属性会传递到子 `<Button>` 组件上，子 `<Button>` 组件不用再设置。 |
| `amSize`       | `string`  |            | 按钮尺寸。该属性会传递到子 `<Button>` 组件上，子 `<Button>` 组件不用再设置。 |
| `hollow`       | `bool`    | `false`    | 是否应用「镂空」样式。该属性会传递到子 `<Button>` 组件上，子 `<Button>` 组件不用再设置。 |
| `justify`      | `bool`    | `false`    | 是否让按钮宽度均匀分布。 |
| `stacked`      | `bool`    | `false`    | 是否垂直堆叠按钮。 |
| `gapped`       | `bool`    | `false`    | 是否让按钮间有间隙。 |


## 示例
