import React from 'react';
import PropTypes from 'prop-types';import Card from './Card';
import Icon from './Icon';
import Grid from './Grid';
import Col from './Col';

class TodoItemTypeTwoCollapser extends React.Component {

  render() {

    const {
      onCollapse,
      isCollapsed
    } = this.props;

    const style = {
      wrap: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 12,
        height: 12,
        fontSize: 12,
        color: '#d8d8d8'
      }
    };

    return (
      <div style={style.wrap} onClick={onCollapse}>
        <Icon name={isCollapsed ? 'down-nav' : 'up-nav'}/>
      </div>
    );
  }
}

class TodoItemTypeTwoTop extends React.Component {

  handleTitleClick = (e) => {
    this.props.onTitleClick && this.props.onTitleClick(e)
  }

  render() {

    const {
      isCollapsed,
      title,
      subtitle,
      after,
      onTitleClick
    } = this.props;

    const style = {
      wrap: {
        position: 'relative',
      },
      left: {
        marginRight: 60
      },
      after: {
        position: 'absolute',
        top: 16,
        right: 0,
        width: 60,
        fontSize: 12,
        textAlign: 'right'
      },
      title: {
        fontSize: 16,
        paddingTop: 16,
        marginBottom: 2
      },
      subtitle: {
        paddingBottom: isCollapsed ? 8 : '',
      }
    };

    return (
      <div style={style.wrap}>
        <div style={style.left}>
          <h1 style={style.title} onClick={this.handleTitleClick}>{title}</h1>
          <div style={style.subtitle}>{subtitle}</div>
        </div>
        <div style={style.after}>
          {after}
        </div>
      </div>
    );
  }
}


class IconButton extends React.Component {

  static defaultProps = {
    direction: 'col'
  }

  render() {
    const {
      children,
      icon,
      style,
      direction,
      border,
      ...props
    } = this.props;

    const styles = {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: direction == 'row' ? 'row' : 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      color: '#999999',
      borderRight: border ? '1px solid #d8d8d8' : 0,
      ...style,
    }

    return (
      <div style={styles} {...props}>
        {icon ? <Icon name={icon} style={{fontSize: '16px', color:'#666'}} /> : null}
        <span>{children}</span>
      </div>
    )
  }
}

class IconButtonGroup extends React.Component {
  render() {
    const {
      children,
      style,
    } = this.props;
    const length = children.length;
    const styles = {
      margin: '1.5rem -0.9375rem -0.9375rem',
      borderTop: '1px solid #d8d8d8',
    }

    return (
      <Grid avg={length} style={styles}>
        {
          children.map((child, i) => (
            <Col key={i}>{React.cloneElement(child, {border: !i == length -1})}</Col>
          ))
        }
      </Grid>
    )
  }
}


class TodoItemTypeTwo extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.node,
    after: PropTypes.node,
    defaultCollapsed: PropTypes.bool,
    actions: PropTypes.array,
  }

  static defaultProps = {
    defaultCollapsed: true,
    actions: [],
  }

  constructor(props) {
    super(props)
    const {
      defaultCollapsed
    } = this.props;
    this.state = {
      isCollapsed: defaultCollapsed
    };
  }

  render() {

    const {
      children,
      title,
      subtitle,
      after,
      defaultCollapsed,
      layout,
      noline,
      onTitleClick,
      actions,
      ...others
    } = this.props;

    const style = {
      body: {
        position: 'relative',
        marginTop: '-0.9375rem',
        marginBottom: '-0.9375rem',
      },
      detail: {
        marginBottom: this.state.isCollapsed ? 0 : '8px'
      }
    };

    return (
      <Card layout noline style={{position: 'relative'}} {...others}>
        <div style={style.body}>
          <TodoItemTypeTwoTop
            isCollapsed={this.state.isCollapsed}
            title={title}
            subtitle={subtitle}
            after={after}
            onTitleClick={onTitleClick}
          />
          <div style={Object.assign(style.detail)}>
            {!this.state.isCollapsed ? children : null}
          </div>
          <TodoItemTypeTwoCollapser
            isCollapsed={this.state.isCollapsed}
            onCollapse={() => {this.setState({isCollapsed:!this.state.isCollapsed})}}
          />
        </div>
        {
          actions.length > 0 && !this.state.isCollapsed ?
          <IconButtonGroup>
          {
            actions.map((action, i) => {
              const {
                icon,
                label
              } = action;
              return (
                <IconButton icon={icon} {...action} key={i}>{label}</IconButton>
              )
            })
          }
          </IconButtonGroup> :
          null
        }
      </Card>
    );
  }
}

export default TodoItemTypeTwo;
