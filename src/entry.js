import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Main from './components/main';
import '../css/app.scss';
import app from './reducers/app';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';


//let store = createStore(app, applyMiddleware(thunkMiddleware));

let store = createStore(app,
	applyMiddleware(thunkMiddleware));

const history = syncHistoryWithStore(browserHistory, store);


render(
	<Provider store={store}>
    	{ /* Tell the Router to use our enhanced history */ }
    	<Router history={history}>
      		<Route path="/" component={App}>
        		<Route path="foo" component={Foo}/>
        		<Route path="bar" component={Bar}/>
      		</Route>
    	</Router>
	</Provider>,
  document.getElementById('app')
)


//render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));