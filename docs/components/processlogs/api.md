---
imports:
  '{ ProcessLogs }': 'amazeui-touch'
---

# ProcessLogs

## 基础

```demo
class extends React.Component {
  render() {
    const data=[
      {
        "date": "2018年5月23日",
        "process":[
          {
            "title": "贺安琪",
            "time": "11:34:23",
            "after": "已通过",
            "content": "结束页面进程，提示语修改为“浏览器程序已崩溃，请重新打开”"
          },
          {
            "title": "贺安琪",
            "time": "11:34:23",
            "after": "已通过",
            "content": "结束页面进程，提示语修改为“浏览器程序已崩溃，请重新打开”"
          }
        ]
      },
      {
        "date": "2018年3月17日",
        "process":[
          {
            "title": "贺安琪",
            "time": "11:34:23",
            "after": "已通过",
            "content": "结束页面进程，提示语修改为“浏览器程序已崩溃，请重新打开”"
          }
        ]
      },
      {
        "date": "2018年2月20日",
        "process":[
          {
            "title": "贺安琪",
            "time": "11:34:23",
            "after": "已通过",
            "content": "结束页面进程，提示语修改为“浏览器程序已崩溃，请重新打开”"
          },
          {
            "title": "贺安琪",
            "time": "11:34:23",
            "after": "已通过",
            "content": "结束页面进程，提示语修改为“浏览器程序已崩溃，请重新打开”"
          },
          {
            "title": "贺安琪",
            "time": "11:34:23",
            "after": "已通过",
            "content": "结束页面进程，提示语修改为“浏览器程序已崩溃，请重新打开”"
          }
        ]
      }
    ]

    return (  
      <ProcessLogs source={data} />
    )
  }
}
```
## 示例
