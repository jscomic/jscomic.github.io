import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import { createHistory } from 'history'

import ComicApp from './ComicApp';
import ComicModal from './ComicModal';
import fetch from 'isomorphic-fetch';

window.assetsUrl = '/comics/';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

let assetsUrl = '/comics/';

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(reducer);
const history = createHistory();
syncReduxAndRouter(history, store);

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={ComicApp}>
                <Route path="comic/:slug" component={ComicModal} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('ComicApp')
);

