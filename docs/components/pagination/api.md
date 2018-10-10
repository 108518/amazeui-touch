---
imports:
  '{ Pagination }': 'amazeui-touch'
---

# Pagination

分页器组件。

分页器只会展示 5 项，当前页码保持居中。

## 基础

```demo
<Pagination total={10} current={5} />
```

## 事件

- onChange: 点击页码触发回调函数
- onPrevious: 点击上一页
- onNext: 点击下一页

```demo
class OnChange extends React.Component {

  state = {
    current: 5
  }

  onChange = (item) => {
    console.log("current item index", item)
    this.setState({
      current: item
    })
  }

  onNext = () => {
    this.setState((state) => { return { current: state.current + 1 } })
  }
  onPrevious = () => {
    this.setState((state) => { return { current: state.current - 1 } })
  }

  render() {
    return (
      <Pagination 
        total={10} 
        current={this.state.current} 
        onChange={this.onChange}
        onNext={this.onNext}
        onPrevious={this.onPrevious}
      />
    )
  }
}
```

## showTotal

为保证可扩展性，通过设置回调函数返回自定义字符串：

```demo
<Pagination showTotal={(total) => `all: ${total}` } />
```

## API


| 名称                |  类型           | 默认值           | 含义           |
| -------------      | -------------  | --------------- | --------------- |
| `total`            |  `number`       |  5      |  总页数  |
| `current`         |  `number`       |    1     |  当前页  |
| `onChange`        |   `func`        |         | 点击页码的回调函数  |
| `showTotal`        |   `func`        |         | 展示总页数  |
| `onPrevious`        |   `func`        |         | 点击上一页回调函数  |
| `onNext`        |   `func`        |         | 点击下一页回调函数  |



## 示例
