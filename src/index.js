import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const RoutedApp = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);


ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();
