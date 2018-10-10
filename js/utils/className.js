import {
  NAMESPACE,
  CLASSNAMES,
} from '../config';

const NameSpace = NAMESPACE ? NAMESPACE + '-' : '';

export const setClassNS = (classPrefix = '') => NameSpace + classPrefix;


export class ClassName {
  constructor(props) {
    this.props = props;

    this.classPrefix = this.props.classPrefix;
    this.namespace = NameSpace;

    this.className = `${this.namespace}${this.classPrefix}`;

    this.classNames = this.getClassSet();
  }

  getClassSet = (ignorePrefix) => {
    const classNames = {};
    const {
      classPrefix,
      amSize,
      amStyle,
      hollow,
      radius,
      square,
      rounded,
      active,
      selected,
      disabled,
      inset,
    } = this.props;

    // uses `.am-` as prefix if `classPrefix` is not defined
    const prefix = classPrefix ? this.className + '-' : this.namespace;

    // don't return prefix if ignore flag set
    !ignorePrefix && (classNames[this.className] = true);

    if (amSize) {
      classNames[prefix + amSize] = true;
    }
    if (amStyle) {
      classNames[prefix + amStyle] = true;
    }

    classNames[prefix + 'hollow'] = hollow;
    classNames[prefix + 'square'] = square;
    classNames[prefix + 'radius'] = radius;
    classNames[prefix + 'rounded'] = rounded;
    classNames[prefix + 'inset'] = inset;

    // state className
    // `selected` is an alias of active
    classNames[CLASSNAMES['active']] = active || selected;
    classNames[CLASSNAMES['disabled']] = disabled;
    // shape
    // classNames[constants.CLASSES.radius] = this.props.radius;
    // classNames[constants.CLASSES.round] = this.props.round;
    return {...classNames}
  }

  prefixClass = (classname) => {
    return this.className + '-' + classname
  }

  get classSet() {
    return {...this.classNames};
  }
}

export default props => new ClassName(props)
