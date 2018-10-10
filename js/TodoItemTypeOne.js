import React from 'react';
import PropTypes from 'prop-types';import Card from './Card';
import Grid from './Grid';
import Col from './Col';
import Icon from './Icon';

class TodoItemTypeOneTop extends React.Component {

  handleTitleClick = (e) => {
    this.props.onTitleClick && this.props.onTitleClick(e)
  }

  render() {

    const {
      onCollapse,
      title,
      subtitle,
      onTitleClick,
      isCollapsed
    } = this.props;

    const style = {
      wrap: {
        borderBottom: isCollapsed ? '' : '1px solid #d8d8d8',
        position: 'relative',
      },
      left: {
        marginRight: 12
      },
      right: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        right: 0,
        width: 12,
        fontSize: 12,
        height: '100%',
        color: '#d8d8d8',
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        fontSize: 16,
        paddingTop: 16,
        marginBottom: 2
      },
      subtitle: {
        paddingBottom: 8,
      },
      icon: {}
    };

    return (
      <div style={style.wrap}>
        <div style={style.left}>
          <h1 style={style.title} onClick={this.handleTitleClick}>{title}</h1>
          <div style={style.subtitle}>{subtitle}</div>
        </div>
        <div style={style.right} onClick={onCollapse}>
          <Icon name={isCollapsed ? 'down' : 'up'}/>
        </div>
      </div>
    );
  }
}

class TodoItemTypeOneBottom extends React.Component {

  render() {

    const {
      onEdit,
      onDelete,
      show
    } = this.props;

    const style = {
      wrap: {
        display: show ? '' : 'none',
        margin: '0 -0.9375rem -0.9375rem',
        borderTop: '1px solid #d8d8d8'
      },
      col: {
        position: 'relative'
      },
      a: {
        display: 'block',
        width: 60,
        margin: '0 auto',
        color: '#000000',
        textAlign: 'center',
        padding: '6px 6px 8px'
      },
      text: {
        fontSize: 12,
        lineHeight: 1,
        color: '#999999'
      },
      s: {
        width: 1,
        height: '60%',
        position: 'absolute',
        top: '20%',
        right: 0,
        backgroundColor: '#d8d8d8'
      }
    };

    return (
      <div style={style.wrap}>
        <Grid>
          <Col style={style.col}>
            <a style={style.a} href="javascript:void(0);" onClick={onEdit}>
              <div><Icon name="write"/></div>
              <div style={style.text}>编辑</div>
            </a>
            <div style={style.s}/>
          </Col>
          <Col>
            <a style={style.a} href="javascript:void(0);" onClick={onDelete}>
              <div><Icon name="dustbin-l"/></div>
              <div style={style.text}>删除</div>
            </a>
          </Col>
        </Grid>
      </div>
    );
  }
}

class TodoItemTypeOne extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    onTitleClick: PropTypes.func,
    subtitle: PropTypes.node,
    defaultCollapsed: PropTypes.bool,
    withBottom: PropTypes.bool,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
  }

  static defaultProps() {
    defaultCollapsed: true
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
      onTitleClick,
      subtitle,
      defaultCollapsed,
      withBottom,
      onEdit,
      onDelete,
      layout,
      noline,
      others
    } = this.props;

    const style = {
      body: {
        marginTop: '-0.9375rem',
        marginBottom: '-0.9375rem'
      },
      detail: {
        margin: '8px 0'
      }
    };

    return (
      <Card layout noline {...others}>
        <div style={style.body}>
          <TodoItemTypeOneTop
            isCollapsed={this.state.isCollapsed}
            title={title}
            subtitle={subtitle}
            onCollapse={() => {this.setState({isCollapsed: !this.state.isCollapsed})}}
            onTitleClick={onTitleClick}
          />
          <div style={Object.assign(style.detail, this.state.isCollapsed && {display: 'none'})}>
            {children}
          </div>
          {withBottom &&
          <TodoItemTypeOneBottom
            show={!this.state.isCollapsed}
            onEdit={onEdit}
            onDelete={onDelete}
          />
          }
        </div>
      </Card>
    );
  }
}

export default TodoItemTypeOne;
