import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Main from './components/main';
import '../css/app.scss';
import app from './reducers/app';
import { render } from 'react-dom';


let store = createStore(app, applyMiddleware(thunkMiddleware));


render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));