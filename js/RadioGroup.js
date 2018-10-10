import React from 'react';
import PropTypes from 'prop-types';import cx from 'classnames';
import classNameSpace, {setClassNS} from './utils/className';

import List from './List'
import Icon from './Icon'
import NavBar from './NavBar'
import CheckBox from './CheckBox'

export default class RadioGroup extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    label: PropTypes.string,
    containerClassName: PropTypes.string,
    modal: PropTypes.bool,
  }

  static defaultProps = {
      classPrefix: 'radio-group',
      label: '单选选择',
      modal: false,
  }

  constructor(props) {
    super(props)
    let { modal } = this.props;
    const { children } = this.props;
    // 判断条件，大于6条或者字段超过5个字（不包含5个）
    modal = modal || children && (children.length > 6 || children.size > 6);
    if (!modal) {
      React.Children.map(children, (child) => {
        if (child.props.text && child.props.text.trim().replace(/[^\x00-\xff]/g, "01").length > 10) {
          modal = true;
        }
      });
    }
    let checkedName = "";
    if (modal) {
      React.Children.map(children, (child, index) => {
        if (child.props.checked) {
          checkedName = child.props.text;
        }
      });
    }
    return {
      modal,
      checkedName,
      showModal: false,
    };
  }

  updateNum = () => {
    this.setState({ updateNum: !this.state.updateNum });
  }

  renderChild = () => {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, { changeEvent: this.updateNum.bind(this, index) });
    });
  }

	render() {
    const classNS = classNameSpace(this.props);
    this.prefixClass = classNS.prefixClass;
    this.setClassNS = setClassNS;


		const { classPrefix, label, modal, containerClassName, children, ...other } = this.props;
    const ChildNodes = this.renderChild();
		return this.state.modal ? (
			<div {...other} className={cx(this.setClassNS(), containerClassName)} >
        <List>
          <List.Item ref={(c) => this.checkedName = c} href="javascript:void(0);" after={this.state.checkedName || '选择处理结果'} title={label} onClick={() => this.setState({ showModal: true })} />
        </List>
				<div ref={(c) => this.modal = c} onClick={() => {this.setState({ update: !this.state.update });}} className={cx(this.prefixClass("modal"))} style={{ display: this.state.showModal ? 'flex' : 'none' }}>
          <div>
            <h2>单项选择</h2>
            <div>{ ChildNodes }</div>
  					<p ref={(c) => this.checkedNum = c} onClick={() => {this.setState({ showModal: false })}}>确认</p>
          </div>
				</div>
			</div>
      ) : <div {...other} children={children} className={cx(this.setClassNS(), this.prefixClass("btn"), containerClassName)} />;
	}

  componentDidUpdate(prevProps, prevState) {
    if (this.modal) {
      const checkedInput = this.modal.querySelector('input:checked');
      if (this.modal && checkedInput) {
        const checkedName = checkedInput.nextElementSibling.innerText;
        if (checkedName != this.state.checkedName) {
          this.setState({
            checkedName
          });
        }
      }
    }
  }
}

