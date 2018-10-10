# Document

文档编写说明。

文档使用 `md` 语法，并且在 `md` 语法上进行了扩展。

**``` run** 运行代码
**``` demo** 运行代码，并且高亮显示代码

## advanced

文档使用 loader 直接加载 md 文件，并且生成代码模板，再通过 bable 编译输出到语法树中，可以把 md 文件看作一个 React Component。

如果需要修改代码模版，可以直接修改 `/tools/md2react-loader`。
