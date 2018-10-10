import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import classNames from 'classnames';
import { browser } from './util';
import toArray from 'rc-util/lib/Children/toArray';

const browserUa = typeof window !== 'undefined' ? browser(window.navigator) : '';
const ieOrEdge = /.*(IE|Edge).+/.test(browserUa);
// const uaArray = browserUa.split(' ');
// const gtIE8 = uaArray.length !== 2 || uaArray[0].indexOf('IE') === -1 || Number(uaArray[1]) > 8;

const defaultTitle = '---';

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    [
      'onExpand',
      'onCheck',
      'onSelect',
    ].forEach((m) => {
      this[m] = this[m].bind(this);
    });
    this.state = {
      dataLoading: false,
    };
  }

  componentDidMount() {
    if (!this.props.root._treeNodeInstances) {
      this.props.root._treeNodeInstances = [];
    }
    this.props.root._treeNodeInstances.push(this);
  }

  // shouldComponentUpdate(nextProps) {
  //   if (!nextProps.expanded) {
  //     return false;
  //   }
  //   return true;
  // }

  onCheck() {
    this.props.root.onCheck(this);
  }

  onSelect() {
    this.props.root.onSelect(this);
  }

  onExpand() {
    const callbackPromise = this.props.root.onExpand(this);
    if (callbackPromise && typeof callbackPromise === 'object') {
      const setLoading = (dataLoading) => {
        this.setState({ dataLoading });
      };
      setLoading(true);
      callbackPromise.then(() => {
        setLoading(false);
      }, () => {
        setLoading(false);
      });
    }
  }

  // keyboard event support
  onKeyDown(e) {
    e.preventDefault();
  }

  renderSwitcher(props, expandedState) {
    const prefixCls = props.prefixCls;
    const switcherCls = {
      [`${prefixCls}-switcher`]: true,
    };
    if (!props.showLine) {
      switcherCls[`${prefixCls}-noline_${expandedState}`] = true;
    } else if (props.pos === '0-0') {
      switcherCls[`${prefixCls}-roots_${expandedState}`] = true;
    } else {
      switcherCls[`${prefixCls}-center_${expandedState}`] = !props.last;
      switcherCls[`${prefixCls}-bottom_${expandedState}`] = props.last;
    }
    if (props.disabled) {
      switcherCls[`${prefixCls}-switcher-disabled`] = true;
      return <span className={classNames(switcherCls)}></span>;
    }
    return <span className={classNames(switcherCls)} onClick={this.onExpand}></span>;
  }

  renderCheckbox(props) {
    const prefixCls = props.prefixCls;
    const checkboxCls = {
      [`${prefixCls}-checkbox`]: true,
    };
    if (props.checked) {
      checkboxCls[`${prefixCls}-checkbox-checked`] = true;
    } else if (props.halfChecked) {
      checkboxCls[`${prefixCls}-checkbox-indeterminate`] = true;
    }
    let customEle = null;
    if (typeof props.checkable !== 'boolean') {
      customEle = props.checkable;
    }
    if (props.disabled || props.disableCheckbox) {
      checkboxCls[`${prefixCls}-checkbox-disabled`] = true;
      return <span ref="checkbox" className={classNames(checkboxCls)}>{customEle}</span>;
    }
    return (
      <span ref="checkbox"
        className={classNames(checkboxCls) }
        onClick={this.onCheck}
      >{customEle}</span>);
  }

  renderChildren(props) {
    const renderFirst = this.renderFirst;
    this.renderFirst = 1;
    let transitionAppear = true;
    if (!renderFirst && props.expanded) {
      transitionAppear = false;
    }
    const children = props.children ? toArray(props.children) : props.children;
    let newChildren = children;
    if (children &&
      (Array.isArray(children) &&
        children.every((item) => item.type && item.type.isTreeNode) ||
        (children.type && children.type.isTreeNode))) {
      const cls = {
        [`${props.prefixCls}-child-tree`]: true,
        [`${props.prefixCls}-child-tree-open`]: props.expanded,
      };
      if (props.showLine) {
        cls[`${props.prefixCls}-line`] = !props.last;
      }
      const animProps = {};
      if (props.openTransitionName) {
        animProps.transitionName = props.openTransitionName;
      } else if (typeof props.openAnimation === 'object') {
        animProps.animation = assign({}, props.openAnimation);
        if (!transitionAppear) {
          delete animProps.animation.appear;
        }
      }
      newChildren = (
        <div>
          {!props.expanded ? null : <ul className={classNames(cls)} data-expanded={props.expanded}>
            {React.Children.map(children, (item, index) => {
              return props.root.renderTreeNode(item, index, props.pos);
            }, props.root)}
          </ul>}
        </div>
      );
    }
    return newChildren;
  }

  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;
    const expandedState = props.expanded ? 'open' : 'close';
    let iconState = expandedState;

    let canRenderSwitcher = true;
    const content = props.title;
    let newChildren = this.renderChildren(props);
    if (!newChildren || newChildren === props.children) {
      // content = newChildren;
      newChildren = null;
      if (!props.loadData || props.isLeaf) {
        canRenderSwitcher = false;
        iconState = 'docu';
      }
    }
    // For performance, does't render children into dom when `!props.expanded` (move to Animate)
    // if (!props.expanded) {
    //   newChildren = null;
    // }

    const iconEleCls = {
      [`${prefixCls}-iconEle`]: true,
      [`${prefixCls}-icon_loading`]: this.state.dataLoading,
      [`${prefixCls}-icon__${iconState}`]: true,
    };

    const selectHandle = () => {
      const icon = (props.showIcon || props.loadData && this.state.dataLoading) ?
        <span className={classNames(iconEleCls)}></span> : null;
      const title = <span className={`${prefixCls}-title`}>{content}</span>;
      const wrap = `${prefixCls}-node-content-wrapper`;
      const domProps = {
        className: `${wrap} ${wrap}-${iconState === expandedState ? iconState : 'normal'}`,
      };
      if (!props.disabled) {
        if (props.selected) {
          domProps.className += ` ${prefixCls}-node-selected`;
        }
        domProps.onClick = (e) => {
          e.preventDefault();

          if (props.selectable) {
            this.onSelect();
          }
          // not fire check event
          // if (props.checkable) {
          //   this.onCheck();
          // }
        };
      }
      return (
        <a ref="selectHandle" title={typeof content === 'string' ? content : ''} {...domProps}>
          {icon}{title}
        </a>
      );
    };

    const liProps = {};

    let disabledCls = '';

    const filterCls = props.filterTreeNode(this) ? 'filter-node' : '';

    const noopSwitcher = () => {
      const cls = {
        [`${prefixCls}-switcher`]: true,
        [`${prefixCls}-switcher-noop`]: true,
      };
      if (props.showLine) {
        cls[`${prefixCls}-center_docu`] = !props.last;
        cls[`${prefixCls}-bottom_docu`] = props.last;
      } else {
        cls[`${prefixCls}-noline_docu`] = true;
      }
      return <span className={classNames(cls)}></span>;
    };

    return (
      <li {...liProps} ref="li"
        className={classNames(props.className, disabledCls, filterCls) }
      >
        <div className={`${prefixCls}-item`}>
          {canRenderSwitcher ? this.renderSwitcher(props, expandedState) : noopSwitcher()}
          {selectHandle()}
          {props.checkable ? this.renderCheckbox(props) : null}
        </div>
        {newChildren}
      </li>
    );
  }
}

TreeNode.isTreeNode = 1;

TreeNode.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  disableCheckbox: PropTypes.bool,
  expanded: PropTypes.bool,
  isLeaf: PropTypes.bool,
  root: PropTypes.object,
  onSelect: PropTypes.func,
};

TreeNode.defaultProps = {
  title: defaultTitle,
};

export default TreeNode;
