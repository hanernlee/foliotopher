import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import './stylesheets/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducer from './rootReducer';
import Hamburger from './hamburger/index';
import Navigation from './navigation/index';
import App from './home/index';
import Work from './work/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

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