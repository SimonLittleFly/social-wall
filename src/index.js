import React from 'react';
import ReactDOM from 'react-dom';
import Header from './template/header';
import Wall from './template/wall';
import './assets/scss/main.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.Fragment><Header /><Wall /></React.Fragment>, document.getElementById('content'));

serviceWorker.unregister();
