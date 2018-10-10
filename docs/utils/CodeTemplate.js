import React from 'react';
import Clipboard from 'react-clipboard.js';


export default class CodeTemplate extends React.Component {

  state = {
    isOpen: false,
    copyStatus: null,
  }

  setCopyStatus = (status) => {
    this.setState({
      copyStatus: status,
    });

    this._clearTimeout();

    this._timeout = setTimeout(() => {
      this._resetStatus();
    }, 2000);
  }

  _clearTimeout = () => {
    this._timeout && clearTimeout(this._timeout);
  }

  _resetStatus = () => {
    this.setState({
      copyStatus: null,
    });
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  copySuccess = () => {
    this.setCopyStatus('success')
  }

  copyError = () => {
    this.setCopyStatus('error')
  }

  renderCopyStatus = () => {
    const status = this.state.copyStatus;
    const statusMap = {
      error: '拷贝失败',
      success: '拷贝成功',
    };

    return status ? (
      <div
        className={`code-status ${status}`}
        key="copyStatus"
      >
        {statusMap[status]}
      </div>
    ) : null;
  }

  render() {
    const {
      children,
      source
    } = this.props;
    const {
      isOpen
    } = this.state;
    const codeStyle = isOpen ? "code-source code-show" : "code-source code-close";
    const iconStyle = isOpen ? "icon-open" : "icon-close";

    return (
      <div className="code-template">
      <div className={codeStyle} title="复制代码">
        <div className="code-copy">
          <Clipboard
            data-clipboard-text={source}
            onSuccess={this.copySuccess}
            onError={this.copyError}
          >
            <svg viewBox="0 0 1024 1024" width="24" height="24"><path d="M682.666667 341.333333h128v512H298.666667v-128H170.666667V213.333333h512v128z m0 42.666667v341.333333H341.333333v85.333334h426.666667V384h-85.333333zM213.333333 256v426.666667h426.666667V256H213.333333z" fill="#999999"></path></svg>
          </Clipboard>
        </div>
        {
          this.renderCopyStatus()
        }
        <div className="code-source">
          {children}
        </div>

        </div>
        <div className="code-toggle" onClick={this.toggleOpen}>
          <svg className={iconStyle} viewBox="0 0 1024 1024" width="14" height="14"><path d="M472.064 272.448l-399.232 399.232c-22.08 22.08-22.08 57.792 0 79.872 22.016 22.016 57.792 22.08 79.872 0L512 392.256l359.296 359.296c22.016 22.016 57.792 22.08 79.872 0 22.08-22.08 22.016-57.792 0-79.872L551.936 272.448C529.856 250.432 494.144 250.432 472.064 272.448z" fill="#999999"></path></svg></div>
      </div>
    )
  }
}
