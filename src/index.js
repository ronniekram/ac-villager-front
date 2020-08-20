import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers/index'

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// createStore creates store -- globalized state that can be accessed anywhere in app
// needs the argument of a reducer (or combined reducers)

ReactDOM.render(
  // connects state to store from application -- provider wrapping app gives everything in App file access to store
  <Provider store={store}> 
  {/* // Gives everything inside wrapper the ability to handle routing */}
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

  // dispatch executes the action (dispatch the action to the reducer)
  // dispatch takes the argument of an action to dispatch to the store/global state
  // events can dispatch actions

  //components hold html, logic, etc in one place -- self-contained/separation of concerns
