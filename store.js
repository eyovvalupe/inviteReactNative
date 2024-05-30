import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; // Optional: Middleware for handling asynchronous actions
// import { composeWithDevTools } from 'redux-devtools-extension'; // Optional: DevTools extension

import rootReducer from './reducers'; // Import your root reducer

const initialState = {}
// const middleware = [thunk]; // Add any middleware you want to use

const store = createStore(
  rootReducer,
  initialState,
  // applyMiddleware(...middleware)
);

export default store;
