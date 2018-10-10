/**
 * delactive component for handling Touch move
 */

class Move extends React.Component {

  static defaultProps = {
    scrollX: true,
    scrollY: true,
    edgeX: () => {},
    edgeY: () => {},
  }

  state = {
    translateX: 0,
    translateY: 0,
  }

  componentWillReceiveProps(props) {
    this.setState((pre) => {
      const curX = pre.translateX + props.distanceX
      const curY = pre.translateY + props.distanceY
      this.edgeX && this.props.edgeX(curX)
      this.edgeY && this.props.edgeX(curY)

      return {
        translateX: curX,
        translateY: curY,
      }
    })
  }

  render() {
    let {
      translateX,
      translateY
    } = this.state

    const {
      scrollX,
      scrollY,
    } = this.props

    translateX = scrollX ? translateX : 0;
    translateY = scrollY ? translateY : 0;

    const styles = {
      transform: `translate3D(${translateX}px, ${translateY}px,0)`
    }

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}


class Touchable extends React.Component {

  state = {
    distanceX: 0,
    distanceY: 0,
    positionX: 0,
    positionY: 0,
  }

  onTouchStart = (event) => {
    console.log(event.touches[0])
    const touchStart = event.touches[0]
    this.setState({
      positionX: touchStart.clientX,
      positionY: touchStart.clientY,
    })
  }

  onTouchMove = (event) => {
    const touchMove = event.touches[0]
    this.setState((pre) => {
      return {
        positionX: touchMove.clientX,
        positionY: touchMove.clientY,
        distanceX: touchMove.clientX - pre.positionX,
        distanceY: touchMove.clientY - pre.positionY,
      }
    })
    console.log(touchMove)
  }

  onTouchEnd = () => {
    console.log(this.state)
  }

  render() {
    const {
      children
    } = this.props;
    return (
      <div
        onTouchStart={this.onTouchStart}
        onTouchMove ={this.onTouchMove }
        onTouchEnd  ={this.onTouchEnd  }
      >
        {
          React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, this.state)
          })
        }
      </div>
    )
  }
}
