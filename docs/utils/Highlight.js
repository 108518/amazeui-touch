import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Clipboard from 'react-clipboard.js';
import Prism from './Prism';


class AdvancedHl extends React.Component {
  render() {
    if ( document.body.clientWidth < 640) {
      return null
    }

    return (
      <Highlight {...this.props} />
    )
  }
}


class Highlight extends React.Component {

  state = {
    copyStatus: null,
  }

  static defaultProps = {
    language: 'jsx',
  }

  setCopyStatus = (status) => {
    this.setState({
      copyStatus: status,
    });

    this._clearTimeout();

    this._timeout = setTimeout(() => {
      this._resetStatus();
    }, 3500);
  }

  _clearTimeout = () => {
    this._timeout && clearTimeout(this._timeout);
  }

  _resetStatus = () => {
    this.setState({
      copyStatus: null,
    });
  }

  // TODO: 显示一个 iframe 可能更优雅一些
  _openDemo = (url, e) => {
    e.preventDefault();
    window.open(url, '',
      'width=320px, height=568px, centerscreen=yes');
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

  renderDemoLink = () => {
    const {
      demo,
      } = this.props;
    const url = `/kitchen-sink/#/${demo}`;

    return demo ? (
      <a
        href={url}
        onClick={this._openDemo.bind(null, url)}
      >
        Demo
      </a>
    ) : null;
  }

  copyStatusSuccess = () => {
    this.setCopyStatus('success')
  }

  render() {
    const {
      className,
      language,
      children,
      ...props,
      } = this.props;
    const code = Prism.amtHighlight({text: children, language, ln: 1});

    return (
      <div
        className="doc-highlight"
      >
        <div ref="code" dangerouslySetInnerHTML={{__html: code}} />
        <div className="code-actions">
          {this.renderDemoLink()}
          <Clipboard
            data-clipboard-text={children}
            onSuccess={this.copyStatusSuccess}
          >
            <svg viewBox="0 0 1024 1024" width="24" height="24"><path d="M682.666667 341.333333h128v512H298.666667v-128H170.666667V213.333333h512v128z m0 42.666667v341.333333H341.333333v85.333334h426.666667V384h-85.333333zM213.333333 256v426.666667h426.666667V256H213.333333z" fill="#999999"></path></svg>
          </Clipboard>
        </div>

        <CSSTransitionGroup
          transitionName="copy-status"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {this.renderCopyStatus()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default AdvancedHl;
