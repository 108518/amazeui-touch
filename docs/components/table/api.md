---
imports:
  '{ Table }': 'amazeui-touch'
---

# Table

表格组件，用于数据展示。

## 基础

简单表格：
```demo
class extends React.Component {
  render() {
    const data = [
      {
        title: "name",
        fixed: true,
        data: ["john", "jack", "mark"]
      },
      {
        title: "age",
        data: [12, 342, 33]
      },
      {
        title: "job",
        data: ["前端工程师", "产品经理", "测试工程师"]
      }
    ];

    return (
      <Table source={data} />
    )
  }
}
```

## 表头固定

```demo
class extends React.Component {
  render() {
    const fakeData = (name, count) => {
      return [...Array(count)].map((item, index) => `${name}-${index}`)
    }

    const bigData = (name) => {
      return [...Array(20)].map((item, index) => {
        return {
          title: `${name}-${index}`,
          data: fakeData(`${name}-${index}`, 20),
          columnWidth: 100
        }
      })
    }

    const NASA = bigData("nasa")

    return (
      <Table
        source={NASA}
        textAlign="left"
        fixedHeader
      />
    )
  }
}
```

## 全屏展示

```demo
class extends React.Component {
  render() {
    const fakeData = (name, count) => {
      return [...Array(count)].map((item, index) => `${name}-${index}`)
    }

    const bigData = (name) => {
      return [...Array(20)].map((item, index) => {
        return {
          title: `${name}-${index}`,
          data: fakeData(`${name}-${index}`, 20),
          columnWidth: 100
        }
      })
    }

    const NASA = bigData("nasa")

    return (
      <Table
        source={NASA}
        textAlign="left"
        fixedHeader
        title="产品列表"
        showFullScreen
      />
    )
  }
}
```

## API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `source`           |  `array`       |            |  数据源， 具体格式见下方   |
| `textAlign`          |  `string`     |     'center'  | 单元格对齐方式：enum('left', 'center', 'right')  |
| `fixedHeader`         |  `bool`       |     false    | 是否固定表头 |
| `title`         |  `string`       |         | 表格标题 |
| `showFullScreen`         |  `bool`       |    false     | 是否显示全屏按钮 |

source 格式
```js
source: PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired, // 列表头
  columnWidth: PropTypes.number,      // 列宽， 固定表头时，需要设置列宽，否则不能对齐
  data: PropTypes.array.isRequired    // 列数据，类型：React Element
}))
```


## 示例
