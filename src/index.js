import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { configureStore } from './store';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashBoard from './components/DashBoard';
import Feed from './components/Feed';
import Favorites from './components/Favorites';

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/app" component={App}>
                 <Switch>
                  <Route path="/dashboard" component={DashBoard}/>
                  <Route path="/favorites" component={Favorites}/>
                  <Route path="/feed" component={Feed}/>
                </Switch>
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>,
    document.getElementById('root'));
registerServiceWorker();
