import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import './stylesheets/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducer from './rootReducer';
import Hamburger from './hamburger/index';
import Navigation from './navigation/index';
import App from './home/index';
import Work from './work/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <StyleRoot>
      <BrowserRouter>
        <div>
          <Hamburger />
          <Navigation />
          <Switch>
            <Route path="/work" component={Work} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </StyleRoot>
  </Provider>
  , document.getElementById('root'));
