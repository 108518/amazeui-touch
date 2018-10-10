import React from "react";
import { Container, Group, InputGroup, Field } from "amazeui-touch";
import { debug } from "util";

const fields = [
  {
    label: "姓名",
    placeholder: "李四"
  },
  {
    label: "填表部门",
    placeholder: "云适配产品部"
  },
  {
    label: "填表时间",
    placeholder: "2017/03/20"
  }
];

const InputGroupExample = props => (
  <Container {...props}>
    <InputGroup header="基本信息" fields={fields}>
      <Field label="姓名" placeholder="张三" />
      <Field label="填表部门" placeholder="云适配科技部" />
      <Field label="附件选择" type="file" />
      <Field label="时间" type="date" />
    </InputGroup>
  </Container>
);

export default InputGroupExample;
