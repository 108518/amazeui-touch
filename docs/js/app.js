import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
} from 'react-router';

import '../style/app.scss';

import Container from '../../js/Container';

import ComponentDoc from './ComponentDoc';
import Index from './Index';


class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  state = {
      navActive: false,
  }

  onClick = () => {
    this.setState({
      navActive: !this.state.navActive,
    });
  }

  onMatchClick = () => {
    if (global.matchMedia && global.matchMedia('(max-width: 640px)').matches) {
      this.onClick();
    }
  }

  renderLink = (route, title) => {
    const pathName = `/${route}`;

    return (
      <li className={this.context.router.isActive(pathName) ? 'am-active' : ''}>
        <Link
          to={pathName}
          onClick={this.onMatchClick}
        >
          {title}
        </Link>
      </li>
    );
  }

  render() {
    const navActive = this.state.navActive;
    const active = navActive ? 'am-in' : '';
    const icon = navActive ? 'close' : 'bars';

    return (
      <header className="amt-header">
        <h1 className="amt-logo">
          <a href="/" className="amt-logo-link">Amaze UI For Studio</a>
        </h1>

        <ul className="amt-nav">
          {this.renderLink('docs/getting-started', '开发文档')}
          {this.renderLink('docs/changelog', '变更日志')}
        </ul>
      </header>
    );
  }
}

const App = (props) => (
      <Container direction="column" id="main-route">
        <Header />
        <Container fill direction="column">
          {props.children}
        </Container>
      </Container>
    );

App.NotFound = () => (
      <h2>Oops, 404 Not Found.</h2>
    );

App.Components = (props) =>  (
      <Container fill direction="column">
        {props.children}
      </Container>
    );


const GettingStarted = () => (
  <ComponentDoc component="getting-started" />
)

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="docs" component={App.Components}>
        <Route path=":component" component={ComponentDoc} />
        <IndexRoute component={GettingStarted} />
      </Route>
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

// Initial App
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
