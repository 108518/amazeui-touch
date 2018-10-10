---
imports:
  '{ List, Badge, Icon, Switch, Card }': 'amazeui-touch'
---

# List

列表组件。用来展示一组相关的信息。

## 默认

默认样式：

```demo
<List>
  <List.Item role="header">A</List.Item>
  <List.Item title="列表项 1" />
  <List.Item title="列表项 2" />
  <List.Item title="列表项 3" />
  <List.Item title="列表项 4" />
</List>
```

## 附加信息

使用 after 属性配置附加信息：

```demo
<List.Item title="列表项 1" after="after" />
<List.Item 
  title="列表项 2" 
  after={<Badge rounded amStyle="alert" text="5" />} 
/>
<List.Item
  title="列表项 3"
  after={<Badge rounded amStyle="success" text="ok" />}
/>
<List.Item title="列表项 4" after={<Switch />} />
<List.Item
  title="列表项 4"
  after={<Icon size="2x" name="airplane" />}
/>
```


## 设置链接

可以使用 href 为每个列表项增加链接，那么当前项会渲染成 A 标签, 并且会自动在末尾添加一个箭头图标用作指示:

```demo
<List>
  <List.Item href="#" title="列表项 1" />
  <List.Item href="#" title="列表项 2" />
  <List.Item href="#" after="2018.03" title="列表项 3" />
</List>
```

## 设置图标

使用 media 设置图标：

```demo
<List>
  <List.Item media={<img width="32" src="http://www.placecage.com/100/100" />} title="列表项 1" />
  <List.Item media={<img width="32" src="http://www.placecage.com/100/100" />} title="列表项 2" />
  <List.Item media={<img width="32" src="http://www.placecage.com/100/100" />} title="列表项 3" />
</List>
```

## 设置描述性文字

配合使用 subTitle，desc 等创建一个复杂布局的列表项：

```demo
<List>
  <List.Item {...{
    title: "女爵",
    subTitle: "发行公司：环球唱片",
    after: "2006-12",
    href: "http://music.163.com/#/album?id=31308",
    desc: `
      她坦白了我们所虚伪的 她单纯了我们所复杂的
      五年以来…
      5年的等待，是个漫长也是耗损的过程。
      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
      她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
      是我们唯一相信且期待杨乃文的理由。`
  }} />
  <List.Item {...{
    title: "第一张精选",
    subTitle: "发行公司：滚石唱片",
    after: "2004-01",
    href: "http://music.163.com/#/album?id=31312",
    desc: `
        出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。`
  }} />
  <List.Item {...{
    title: "Silence",
    subTitle: "发行公司：魔岩唱片",
    after: "1999-01",
    href: "http://music.163.com/#/album?id=31319",
    desc: `所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量`
  }}/>
</List>
```

## 图文列表

图文列表的布局展示：

```demo
<List>
  <List.Item
    title="列表项 1"
    subTitle="子标题"
    target="_blank"
    media={<img width="48" src="http://www.placecage.com/130/130" />}
    desc={null}
    href="#"
  />
  <List.Item
    title="列表项 2"
    subTitle="子标题"
    target="_blank"
    media={<img width="48" src="http://www.placecage.com/130/130" />}
    desc={null}
    href="#"
  />
  <List.Item
    title="列表项 3"
    subTitle="子标题"
    target="_blank"
    media={<img width="48" src="http://www.placecage.com/130/130" />}
    desc={null}
    href="#"
  />
</List>
```

## 嵌套样式

列表嵌套在 Card 内使用时，优化了样式：

```demo
<Card title="标题">
  <List>
    <List.Item 
      title="列表项 1"
      after={
        <Badge rounded amStyle="alert" text="5" />
      }
    />
    <List.Item
      after={
        <Badge rounded amStyle="success" text="ok" />
      }
      title="列表项 2"
    />
    <List.Item after="After" title="列表项 3" />
  </List>
</Card>
```



### &lt;List&gt; API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `component`        | `node`        | `'ul'`          | 组件使用的元素    |
| `inset`            | `bool`        | `false`         | 是否添加列表边距。 |

### &lt;List.Item&gt; API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `role`             | `string`     |  `item`    | 子项角色。`enum('header', 'item')` |
| `title`            | `string`     |            | 列表主标题。            |
| `subTitle`         | `string`     |            | 列表副标题。            |
| `href`             | `string`     |            | 列表链接。              |
| `media`            |  `node`      |            | 列表图片。              |
| `after`            |  `node`      |            | 列表标题后面的附加信息，如日期、小徽章等。 |
| `desc`             |  `node`      |            | 列表项摘要、描述信息。    |
| `nested`           |  `string`    |            | 如果列表项中嵌套了以上三种表单类型之一，需要设置改属性。enum('input', 'radio', 'checkbox') |
| `linkComponent`    |  `any`       |            | 链接组件，在一些场合可以传入如 react-router `<Link>` 之类的组件。|
| `linkProps`        |  `object`    |            | 传递到 `linkComponent` 上的属性。 |


`media` 使用参考：
 
```javascript
const img = <img width="32" src="http://lorempixel.com/128/128/people/" />;

const listInstance = (
  <List.Item
    media={img}
    title="包含图片列表项"
    href="#"
  />
);
```

`after` 使用参考：

```javascript
const badge1 = <Badge rounded amStyle="alert">5</Badge>;

const listInstance = (
  <List.Item
    after={badge1}
    title="包含徽章的列表项"
    href="#"
  />
);
```

## 示例
