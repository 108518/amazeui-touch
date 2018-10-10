---
imports:
  '{ Grid, Col }': 'amazeui-touch'
---

# Grid

网格组件，Amaze UI Touch 默认提供了 **`6`** 列的网格系统。
在移动端使用 Grid 组件可以解决绝大多数的布局问题。

虽然名字叫做 Grid，但是内部实现是 flexbox，而不是 grid。


## 基础

Grid 是栅格系统的容器， Col 代表一个栅格：
背景色为演示而添加。

```demo
<Grid>
  <Col>col</Col>
  <Col>col</Col>
</Grid>
```

## 比例设定

在 Col 上通过 cols 属性指定列所占比例（总数为 6）:

```demo
<Grid>
  <Col cols={4}>cols: 4</Col>
  <Col cols={2}>cols: 2</Col>
</Grid>
```

## 换行

通过 Grid 的 wrap 属性设置列是否换行:

wrap="wrap":

```demo
<Grid wrap="wrap">
  <Col cols={4}>cols: 4</Col>
  <Col cols={2}>cols: 2</Col>
  <Col cols={2}>cols: 2</Col>
  <Col cols={4}>cols: 4</Col>
</Grid>
```
wrap="wrap-reverse":

```demo
<Grid wrap="wrap-reverse">
  <Col cols={5}>cols: 5</Col>
  <Col cols={1}>cols: 1</Col>
  <Col cols={2}>cols: 2</Col>
</Grid>
```

## 等分网格

超出等分数的将分布到下一行:

```demo
<Grid avg={4}>
  <Col>col</Col>
  <Col>col</Col>
  <Col>col</Col>
  <Col>col</Col>
  <Col>col</Col>
  <Col>col</Col>
  <Col>col</Col>
  <Col>col</Col>
  <Col>col</Col>
</Grid>
```

## 收缩的列

Col 指定 shrink 属性后自动收缩到内容所占宽:

```demo
<Grid>
  <Col shrink>Shrink me</Col>
  <Col>col</Col>
</Grid>
```

## 列偏移

使用 offset 设置栅格偏移：

```demo
<Grid>
  <Col cols={3} offset={1}>
    cols: 3, offset: 1
  </Col>
</Grid>
```

## 网格嵌套

```demo
<Grid>
  <Col>
    <Grid>
      <Col>col</Col>
      <Col>col</Col>
    </Grid>
  </Col>
  <Col>
    <Grid>
      <Col>col</Col>
      <Col>col</Col>
    </Grid>
  </Col>
</Grid>
```

## 对齐方式

默认左对齐：

```demo
<Grid>
  <Col cols={2}>cols: 2</Col>
  <Col cols={2}>cols: 2</Col>
</Grid>
```

居中对齐

```demo
<Grid align="center">
  <Col cols={2}>cols: 2</Col>
  <Col cols={2}>cols: 2</Col>
</Grid>
```

右对齐

```demo
<Grid align="right">
  <Col cols={2}>cols: 2</Col>
  <Col cols={2}>cols: 2</Col>
</Grid>
```

左右分布

```demo
<Grid align="between">
  <Col cols={2}>cols: 2</Col>
  <Col cols={2}>cols: 2</Col>
</Grid>
```

平均分布

```demo
<Grid align="around">
  <Col cols={2}>cols: 2</Col>
  <Col cols={2}>cols: 2</Col>
</Grid>
```




### &lt;Grid&gt; API

| 名称         |  类型          | 默认值        | 含义        |
| ----------  | -------------- | ------------ | ------------ |
| `collapse`  |  `bool`        | `false`      | 是否移除列默认的内边距（`padding`）。 |
| `wrap`      |  `string`      | `'nowrap'`   | 网格容器 `flex-wrap` 属性，是否换行。`enum('wrap', 'wrap-reverse')` |
| `avg`       |  `number`      |              | 平均分配单元格为 n 列。|
| `align`     |  `string`      | `'right'`    | 行中列宽度总和不足 6 时的对齐方式。`enum('right', 'center', 'between', 'around')` 不同值的含义参见 [justify-content][1] |
| `bordered`  |  `bool`        | `false`      | 网格是否显示边框，边框可用于制作九宫格效果。 |

<small>* enum(,) 表示可选值</small>


### &lt;Col&gt; API

网格中列，嵌套在 `<Grid>` 中。

| 名称            |  类型           | 默认值           | 含义        |
| -------------  | -------------- | ---------------- | ------------ |
| `cols`         |  `number`      |                  | 列宽所占的比例，`1-6` 的数字。 |
| `offset`       |  `number`      |                  | 列偏移（与左边元素的外边距）的数量。|
| `shrink`       |  `bool`        |                  | 列是否自动收缩为内容宽度。|

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content

## 示例
