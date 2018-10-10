import React from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import classNameSpace from "./utils/className";
import List from "./List";
import NavBar from "./NavBar";
import CheckBox from "./CheckBox";

export default class CheckBoxGroup extends React.Component {
  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    label: PropTypes.string,
    containerClassName: PropTypes.string,
    modal: PropTypes.bool
  };

  static defaultProps = {
    classPrefix: "checkbox-group",
    label: "复选选择",
    modal: false
  };

  setModalState = (modal, children) => {
    // 判断条件，大于6条或者字段超过5个字（不包含5个）
    modal = modal || (children && (children.length > 6 || children.size > 6));
    if (!modal) {
      React.Children.map(children, child => {
        if (
          child.props.text &&
          child.props.text.trim().replace(/[^\x00-\xff]/g, "01").length > 10
        ) {
          modal = true;
        }
      });
    }
    const childrenState = [];
    if (modal) {
      React.Children.map(children, (child, index) => {
        childrenState.push([child.props.text, child.props.checked]);
      });
    }
    return {
      modal,
      childrenState
    };
  };

  constructor(props) {
    super(props);
    let { modal } = this.props;
    const { children } = this.props;
    return { ...this.setModalState(modal, children), showModal: false };
  }

  updateNum = () => {
    this.setState({ updateNum: !this.state.updateNum });
  };

  renderChild = () => {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        changeEvent: this.updateNum.bind(this, index)
      });
    });
  };

  render() {
    const classNS = classNameSpace(this.props);
    this.prefixClass = classNS.prefixClass;

    const {
      classPrefix,
      label,
      modal,
      containerClassName,
      children,
      ...other
    } = this.props;
    let checkedName = [];
    this.state.childrenState.forEach(item => {
      item[1] && checkedName.push(item[0]);
    });
    const ChildNodes = this.renderChild();
    return this.state.modal ? (
      <div {...other} className={cx(this.setClassNS(), containerClassName)}>
        <List>
          <List.Item
            href="javascript:void(0);"
            after={checkedName.length ? checkedName.join(", ") : "选择处理结果"}
            title={label}
            onClick={() => this.setState({ showModal: true })}
          />
        </List>
        <div
          ref={c => (this.modal = c)}
          onClick={() => {
            this.setState({ update: !this.state.update });
          }}
          className={cx(this.prefixClass("modal"))}
          style={{ display: this.state.showModal ? "block" : "none" }}
        >
          <NavBar title="选择处理结果" amStyle="primary" />
          <div>{ChildNodes}</div>
          <p
            onClick={() => {
              this.setState({ showModal: false });
            }}
          >
            确定(已选{checkedName.length}项)
          </p>
        </div>
      </div>
    ) : (
      <div>
        {label ? (
          <p className={cx(this.prefixClass("label"))}>{label}</p>
        ) : (
          undefined
        )}
        <div
          {...other}
          children={children}
          className={cx(
            this.setClassNS(),
            this.prefixClass("btn"),
            containerClassName
          )}
        />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.modal && prevProps.children !== this.props.children) {
      let { modal } = prevProps;
      const { children } = this.props;

      this.setState({ ...this.setModalState(modal, children) });
    }
    if (this.modal) {
      const checkedInputs = this.modal.querySelectorAll("input");
      const childrenState = [];
      [].forEach.call(checkedInputs, item => {
        childrenState.push([item.nextElementSibling.innerText, item.checked]);
      });
      if (childrenState.toString() != this.state.childrenState.toString()) {
        this.setState({
          childrenState
        });
      }
    }
  }
}
