import ReactDOM from 'react-dom';
import routes from './routes';

import '../dist/amazeui.touch.css';
import './override.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('sk-root'));
});
