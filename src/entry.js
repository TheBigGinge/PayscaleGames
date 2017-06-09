import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import '../css/app.scss';
import * as reducers from './reducers/';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import Main from './components/main';
import LeaderBoard from './components/leaderBoard';
import Header from './components/header';
import Players from './components/players';
import Games from './components/games';

//Business below
//Thank you internets.
//Fun fact you have to keep react-router @3.0.2 in order to work with react-router-redux properly =(
//But yay redux
function configureStore(memoryHistory, initialState) {
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });
  let store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, routerMiddleware(memoryHistory))
    )
  )
  return store
}

let store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store)


render(
	<Provider store={store}>
    	{ /* Tell the Router to use our enhanced history */ }
    	<Router history={history}>
      		<Route path="/" component={Header}>
        		<IndexRoute component={Main} />
        		<Route path="/leaderboards" component={LeaderBoard}/>
        		<Route path="/players" component={Players} />
            <Route path="/games" component={Games} />
      		</Route>
    	</Router>
	</Provider>,
  document.getElementById('app')
)