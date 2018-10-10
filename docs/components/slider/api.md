---
imports:
  '{ Slider }': 'amazeui-touch'
---

# Slider

轮播组件。

## 默认

```demo
<Slider>
  <Slider.Item>
    <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
  </Slider.Item>
  <Slider.Item>
    <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
  </Slider.Item>
  <Slider.Item>
    <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
  </Slider.Item>
  <Slider.Item>
    <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
  </Slider.Item>
</Slider>
```

### &lt;Slider&gt;

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `controls`         |   `bool`      |    true         | 是否显示「上、下翻页」按钮。 |
| `pager`            |   `bool`      |  true           | 是否显示「分页圆点」按钮。   |
| `interval`         |   `number`    |  5000           | 轮播间隔时间，单位：`ms`。 |
| `autoPlay`         |   `bool`      |  true           | 是否自动播放             | 
| `loop`             |   `bool`      |  true           | 是否循环播放             |
| `defaultActiveIndex`|  `number`    |                 | 默认激活的幻灯片编号。     |
| `onAction`         |  `func`       |                 | 幻灯片切换后的回调函数，接受两个参数 `(index, direction)`，`index` 为幻灯片编号，`direction` 为滚动方向。 |


### &lt;Slider.Item&gt;

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `caption`          |   `node`      |                 | 幻灯片标题。      |
| `thumbnail`        |   `string`    |                 | 幻灯片缩略图 URL，设置 `thumbnail` 以后，分页圆点将替换 为缩略图。 |


## 示例
