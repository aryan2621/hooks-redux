import React from "react";
import ReactDOM from "react-dom";
import Redux from "./Redux";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import App from './App'
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//provider helps ijn providing something to the whole applictaion

//ACTONS
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

//REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };
//STORE
// let store = createStore(counter);
// store.subscribe(() => console.log(store.getState()));

//DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//store -> globalized state

// action ->what you want todo

// reducer -> tell us which kind of action is this
//out of the numbers of action already there

//despatch->what to do
//important---> redux mostly necessary in that place where
// using classcomponent as in functional we already have the
//reducer and context both are as seperate hooks

//created a store that holds the state
// one piece of state counter
// can have many reducer ....login ,authetication too
//with dispatch we caused an action as we  passed the reducer in store that check the reducer and perform
//action based on type passed in dispatch and what is in swutch

// with the small projects it  burden
