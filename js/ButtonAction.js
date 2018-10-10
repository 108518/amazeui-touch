import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { setClassNS } from './utils/className';
import ButtonContainer from './ButtonContainer';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import Icon from './Icon';
import Modal from './Modal';

export default class ButtonAction extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.required,
    })),
  };

  static defaultProps = {
    classPrefix: 'btn-action',
  };

  constructor(props) {
    super(props);
    this.state = {
      showAction: false,
      isModalOpen: false
    }
  }

  openModal = () =>{
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    const {
      children,
      className,
      classPrefix,
      ...props
    } = this.props;

    let more = false;
    if (children) {
      more = true;
    }

    const nsPrefix = setClassNS(classPrefix);
    const btnPrefix = setClassNS('btn-more');
    const wrapCls = cx(nsPrefix, className);

    return (
      <div className={wrapCls}>
        <ButtonContainer more={more}>
          <ButtonGroup amStyle="primary" gapped justify>
            {
              this.props.actions.map((item, i) => {
                const {
                  title,
                  ...others
                } = item;
                return (
                  <Button {...others} key={i}>{title}</Button>
              )})
            }
          </ButtonGroup>

          { more ?
            <Button className={btnPrefix} onClick={this.openModal}>
              <Icon name="more-l" />
            </Button> : null
          }
        </ButtonContainer>

        <Modal
          ref={ref => this.modal = ref}
          isOpen={this.state.isModalOpen}
          onDismiss={this.closeModal}
          btnClassName={`${nsPrefix}-action-btn`}
          role="actions"
        >
          {this.props.children}
        </Modal>
      </div>
    )
  }
}
