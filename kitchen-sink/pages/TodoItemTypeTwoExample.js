import React from "react";
import {
  Container,
  TodoItemTypeTwo,
  Pair,
  Icon,
  Button,
  ButtonGroup,
  ButtonContainer
} from "amazeui-touch";

const Example2 = props => {
  const statusNodes = [
    <div style={{ color: "#7dd61c" }}>
      <Icon name="right-arrows-c" /> 待审批
    </div>,
    <div style={{ color: "#f7b934" }}>
      <Icon name="time-l" /> 审批中
    </div>,
    <div style={{ color: "#bbbbbb" }}>
      <Icon name="elect-c" /> 已审批
    </div>
  ];

  // 示例数据，格式不局限于下面的
  const data = [
    {
      title: "锺计元的会所订房流程",
      onTitleClick: e => {
        console.log("I am clicked", e.target);
      },
      properties: [
        ["拟搞人", "傅亘榆"],
        ["商机编号", "A0988898"],
        ["里程碑", "批量"],
        ["修改状态", "审核中"],
        ["当前计划完成日期", "2017年05月01日"],
        ["计划完成日期修改", "2017年09月23日"],
        ["审批节点", "事业部厂房管理员"]
      ],
      status: 1,
      actions: [
        {
          label: "点我",
          icon: "edit",
          onClick: () => {
            console.log("点我干嘛");
          }
        },
        {
          label: "删除",
          icon: "trash"
        }
      ]
    },
    {
      title: "锺计元的会所订房流程",
      properties: [
        ["拟搞人", "傅亘榆"],
        ["商机编号", "A0988898"],
        ["里程碑", "批量"],
        ["修改状态", "审核中"],
        ["当前计划完成日期", "2017年05月01日"],
        ["计划完成日期修改", "2017年09月23日"],
        ["审批节点", "事业部厂房管理员"]
      ],
      defaultCollapsed: false,
      status: 0
    },
    {
      title: "锺计元的会所订房流程",
      properties: [
        ["拟搞人", "傅亘榆"],
        ["商机编号", "A0988898"],
        ["里程碑", "批量"],
        ["修改状态", "审核中"],
        ["当前计划完成日期", "2017年05月01日"],
        ["计划完成日期修改", "2017年09月23日"],
        ["审批节点", "事业部厂房管理员"]
      ],
      status: 0
    },
    {
      title: "锺计元的会所订房流程",
      properties: [
        ["拟搞人", "傅亘榆"],
        ["商机编号", "A0988898"],
        ["里程碑", "批量"],
        ["修改状态", "审核中"],
        ["当前计划完成日期", "2017年05月01日"],
        ["计划完成日期修改", "2017年09月23日"],
        ["审批节点", "事业部厂房管理员"]
      ],
      status: 2
    },
    {
      title: "锺计元的会所订房流程",
      properties: [
        ["拟搞人", "傅亘榆"],
        ["商机编号", "A0988898"],
        ["里程碑", "批量"],
        ["修改状态", "审核中"],
        ["当前计划完成日期", "2017年05月01日"],
        ["计划完成日期修改", "2017年09月23日"],
        ["审批节点", "事业部厂房管理员"]
      ],
      status: 2
    },
    {
      title: "锺计元的会所订房流程",
      properties: [
        ["拟搞人", "傅亘榆"],
        ["商机编号", "A0988898"],
        ["里程碑", "批量"],
        ["修改状态", "审核中"],
        ["当前计划完成日期", "2017年05月01日"],
        ["计划完成日期修改", "2017年09月23日"],
        ["审批节点", "事业部厂房管理员"]
      ],
      status: 2
    }
  ];

  return (
    <Container {...props} style={{ paddingTop: 0 }}>
      {data.map((item, index) => {
        const { properties, status, ...others } = item;
        const topProperties = [properties.shift(), properties.pop()];

        return (
          <TodoItemTypeTwo
            key={index}
            subtitle={topProperties.map((p, i) => {
              return <Pair key={i} name={p[0]} value={p[1]} />;
            })}
            after={statusNodes[status]}
            {...others}
          >
            {properties.map((p, i) => {
              return <Pair key={i} name={p[0]} value={p[1]} />;
            })}
          </TodoItemTypeTwo>
        );
      })}

      <div style={{ height: 62 }} />

      <ButtonContainer
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          left: 0,
          boxShadow: "0 1px 3px rgba(0,0,0,.3)"
        }}
      >
        <ButtonGroup amStyle="primary" gapped justify>
          <Button>提交</Button>
        </ButtonGroup>
      </ButtonContainer>
    </Container>
  );
};

export default Example2;
