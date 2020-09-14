import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';
import { addNewToDo } from './actions/todos';

/**
 * Redux Store
 * Store is our global state. This is where all of
 * our global data exists. We pass in the reducer
 * so it will know how to handle any actions (requests.)
 */
const store = createStore( toDosReducer );

// We can run instructions every time the state/store is
// updated by using the store's "subscribe" method.
// It takes a function to execute as its argument, we are
// using it to console.log() our current state each time
// that it experiences a change.
store.subscribe( () => console.log( store.getState() ) );

/**
 * Redux Dispatch
 * This is what we use to send actions to our store's reducer.
 */
// Dispatch expects a properly formatted action...
// (otherwise your reducer won't know what to do!)
store.dispatch( addNewToDo( "Research Redux" ) );
store.dispatch( addNewToDo( "Review React" ) );

ReactDOM.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
  document.getElementById('root')
);