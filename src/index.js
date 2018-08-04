import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
