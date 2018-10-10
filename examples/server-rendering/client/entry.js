import {render} from 'react-dom';
import routes from '../shared/routes';

import '../../../kitchen-sink/override.scss';

render(routes, document.getElementById('root'));
