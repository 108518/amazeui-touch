---
imports:
  '{ CollapseCard, Badge }': 'amazeui-touch'
---

# CollapseCard

折叠卡片容器。

## 默认

```demo
<CollapseCard
  noMargin
  header="我是会折叠的卡片"
  subHeader={
    <div>
      <p>子标题</p>
      <Badge amStyle="success" text="Elements" />
      <Badge amStyle="primary" text="or or or" />
      <Badge amStyle="success" text="String" />
    </div>
  }
>
  <p>第一行</p>
  <p>第二行</p>
  <p>第三行</p>
  <p>第四行</p>
  <p>第五行</p>
  <p>第六行</p>
  <p>第七行</p>
  <p>第八行</p>
</CollapseCard>
```

### &lt;CollapseCard&gt;

| 属性          | 类型           | 默认值           | 含义                                      |
| ------------- | ------------- | --------------- | ---------------------------------------- |
| `header`           | `string`&#124;`node`   |             | 折叠卡片头部。可自定义。 |
| `subHeader`        | `string`&#124;`node`   |             | 折叠卡片子头部。可自定义。 |
| `defaultCollapsed` | `bool`                 | `true`      | 是否默认折叠。 |
| `noMargin`         | `bool`                 | `false`     | 是否去除 Card 外边距。 |
| `noLine`           | `bool`                 | `false`     | 是否去掉头部、底部的横线。 |
| `collapsedText`    | `string`               | `显示更多`   | 修改展开后的折叠面板的文本 |    
| `uncollapsedText`    | `string`             | `收起全部`   | 修改折叠后的折叠面板的文本 |    



## 示例
