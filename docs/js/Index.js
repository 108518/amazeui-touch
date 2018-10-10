import React from 'react';
import {
  Link,
} from 'react-router';
import Container from '../../js/Container';
import {
  QRCode,
} from '../utils';

class Index extends React.Component {
  componentDidMount() {
    const {
      host,
      } = global.location;
    if (document.body.clientWidth > 640) {
      this._qrcode = new QRCode(this.refs.qrcode, {
        text: `http://${host}/kitchen-sink/`,
        width: 80,
        height: 80,
      });
    }
  }

  render() {
    const year = new Date().getFullYear();

    return (
      <Container style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <div className="amt-banner">
          <div className="am-container">
            <div className="amt-sk">
              <iframe
                src="kitchen-sink"
                frameBorder="0"
                scrolling="no"></iframe>
            </div>

            <div className="amt-intro">
              <h1>Amaze UI For Studio</h1>
              <h2>基于 React.js 的移动端 Web 组件库</h2>
              <p className="amt-version">
                当前版本：v{__VERSION__} <span>|</span>
                <Link to="/docs/changelog">变更日志</Link>
              </p>
              <div className="am-btn-toolbar">
                <a
                  className="amt-btn"
                  href="kitchen-sink"
                >查看演示</a>
                <Link className="amt-btn" to="/docs">开始使用</Link>
                <a
                  className="amt-btn"
                  href={`/${__VERSION__}.zip`}
                  download
                >直接下载</a>
              </div>
              <p className="amt-tip">新版目前处于 beta 阶段，文档也在逐步更新中。有任何问题，请直接反馈哟。</p>
              <div ref="qrcode" className="ks-qrcode am-hide-sm-only"></div>
            </div>
          </div>
          <div className="amt-mask-bg" />
        </div>

        <footer className="amt-footer">
          <p className="amt-cp">
            © {year} AllMobilize, Inc.
            <br />
            Developed with
            <a href="https://code.visualstudio.com/" target="_blank"> Visual Studio Code</a>.
          </p>
        </footer>
      </Container>
    );
  }
}

export default Index;
