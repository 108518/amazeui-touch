import React, {  cloneElement, propTypes } from 'react';
import cx from 'classnames';

import Group from './Group';
import List from './List';
import Field from './Field';

import { setClassNS } from './utils/className'

export default class InputGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        placeholder: PropTypes.string
    })),
    header: PropTypes.string,
    newline: PropTypes.bool,
  };

  static defaultProps = {
    classPrefix: 'input-group'
  };

  render() {
    let {
      className,
      fields,
      header,
      newline,
      classPrefix,
      ...props
    } = this.props;
    const nsPrefix = setClassNS(classPrefix);

    const inputgroupClass = cx(nsPrefix, className)
    const headerClass = cx({
      [`${nsPrefix}-header`]: true,
    })
    const containerClass = cx({
      [`${nsPrefix}-container`]: true,
    })
    const listClass = cx({
      [`${nsPrefix}-list`]: true,
    })

    let extraInput = () => (
      fields.map((field, i) => {
        return (
          <List.Item
            key={i}
            nested="input"
          >
            <Field
              {...field}
              right
            />
          </List.Item>
        );
      })
    );

    /*let twoLine = () => (
      <div className={containerClass}>
        {
          fields.map((field, i) => {
            return (<Field
              key={i}
              label={field.label}
              placeholder={field.placeholder}
              />)
          })
        }
      </div>
    );*/

    return (
      <div {...props} className={inputgroupClass}>
        <div className={headerClass}>
          {header}
        </div>
        <List className={listClass}>
          {React.Children.map(this.props.children, (child, i) => {
            return (
              <List.Item
                key={i}
                nested="input"
              >
                { cloneElement(child, Object.assign({
                  right:true
                }, child.props)) }
              </List.Item>
            )
          })}
          {fields ? extraInput() : ''}
        </List>
      </div>
    )
  }
}
