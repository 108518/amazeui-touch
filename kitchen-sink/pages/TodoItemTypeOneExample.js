import React from "react";
import {
  Container,
  TodoItemTypeOne,
  Pair,
  Button,
  ButtonGroup,
  ButtonContainer
} from "amazeui-touch";

export default class extends React.Component {
  render() {
    // 示例数据，格式不局限于下面的
    const data = [
      {
        title: "锺计元的会所订房流程",
        onTitleClick: e => {
          console.log("I am clicked", e.target);
        },
        properties: [
          ["拟搞人", "沈甯"],
          ["商机编号", "A0988898"],
          ["里程碑", "批量"],
          ["修改状态", "审核中"],
          ["当前计划完成日期", "2017年05月01日"],
          ["计划完成日期修改", "2017年09月23日"],
          ["审批节点", "事业部厂房管理员"]
        ],
        withBottom: true
      },
      {
        title: "锺计元的会所订房流程",
        properties: [
          ["拟搞人", "韩布露"],
          ["商机编号", "A0988898"],
          ["里程碑", "批量"],
          ["修改状态", "审核中"],
          ["当前计划完成日期", "2017年05月01日"],
          ["计划完成日期修改", "2017年09月23日"],
          ["审批节点", "事业部厂房管理员"]
        ],
        withBottom: true,
        defaultCollapsed: false,
        onEdit() {
          console.log("edit");
        },
        onDelete() {
          console.log("delete");
        }
      },
      {
        title: "锺计元的会所订房流程",
        properties: [
          ["拟搞人", "姚安安"],
          ["商机编号", "A0988898"],
          ["里程碑", "批量"],
          ["修改状态", "审核中"],
          ["当前计划完成日期", "2017年05月01日"],
          ["计划完成日期修改", "2017年09月23日"],
          ["审批节点", "事业部厂房管理员"]
        ]
      },
      {
        title: "锺计元的会所订房流程",
        properties: [
          ["拟搞人", "雷瑶瑶"],
          ["商机编号", "A0988898"],
          ["里程碑", "批量"],
          ["修改状态", "审核中"],
          ["当前计划完成日期", "2017年05月01日"],
          ["计划完成日期修改", "2017年09月23日"],
          ["审批节点", "事业部厂房管理员"]
        ]
      },
      {
        title: "锺计元的会所订房流程",
        properties: [
          ["拟搞人", "文盈盈"],
          ["商机编号", "A0988898"],
          ["里程碑", "批量"],
          ["修改状态", "审核中"],
          ["当前计划完成日期", "2017年05月01日"],
          ["计划完成日期修改", "2017年09月23日"],
          ["审批节点", "事业部厂房管理员"]
        ]
      },
      {
        title: "锺计元的会所订房流程",
        properties: [
          ["拟搞人", "任勇"],
          ["商机编号", "A0988898"],
          ["里程碑", "批量"],
          ["修改状态", "审核中"],
          ["当前计划完成日期", "2017年05月01日"],
          ["计划完成日期修改", "2017年09月23日"],
          ["审批节点", "事业部厂房管理员"]
        ]
      }
    ];

    return (
      <Container {...this.props} style={{ paddingTop: 0 }}>
        {data.map((item, index) => {
          const { properties, ...others } = item;
          const firstProperty = properties.shift();

          return (
            <TodoItemTypeOne
              key={index}
              subtitle={
                <Pair name={firstProperty[0]} value={firstProperty[1]} />
              }
              {...others}
            >
              {properties.map((p, i) => {
                return <Pair key={i} name={p[0]} value={p[1]} />;
              })}
            </TodoItemTypeOne>
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
  }
}
