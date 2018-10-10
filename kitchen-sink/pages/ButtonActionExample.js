import React from "react";
import { Container, ButtonAction } from "amazeui-touch";

const actions = [
  {
    title: "取消",
    hollow: true,
    style: {
      color: "red"
    },
    className: "your-classname",
    onClick: e => {
      console.log("event: ", e.type);
    }
  },
  {
    title: "提交"
  },
  {
    title: "确认"
  }
];

const wrapStyle = {
  margin: "8px 4px",
  padding: 0,
  background: "#fff",
  borderRadius: "4px"
};

const ListStyle = {
  listStyle: "none",
  color: "#3d8cf8",
  padding: 0,
  marginLeft: "15px",
  marginRight: "15px"
};

const listStyle = {
  borderBottom: "1px solid #d8d8d8",
  paddingTop: "14px",
  paddingBottom: "14px",
  lineHeight: 1
};

const listLastStyle = {
  paddingTop: "14px",
  paddingBottom: "14px",
  lineHeight: 1
};

const ButtonActionExample = props => (
  <Container {...props}>
    <ButtonAction actions={actions}>
      <div style={wrapStyle}>
        <ul style={ListStyle}>
          <li style={listStyle}>转交上级</li>
          <li style={listStyle}>提交医疗审查员审核</li>
          <li style={listStyle}>提交费用审核员审核</li>
          <li style={listLastStyle}>提交部门经理审核</li>
        </ul>
      </div>
    </ButtonAction>
  </Container>
);

export default ButtonActionExample;
