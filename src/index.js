import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import configureStore from './store';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/app" component={App}/>
                </div>
            </Router>
        </Provider>,
    document.getElementById('root'));
registerServiceWorker();
