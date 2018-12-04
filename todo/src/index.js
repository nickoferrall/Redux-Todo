import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './components/Todo';
import todoReducer from './reducers/todoReducer';

const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log('initial state', store.getState())
// console.log('my store', store)

ReactDOM.render(
    <Provider store={store}><Todo /></Provider>, document.getElementById('root'));
    // <App />, document.getElementById('root'))
