import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    //   avoid state++
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Usereducer() {
  ////////USEREDUCER//////
  // alternaive of the usestate but at the higher level
  //get initialised as the state and action with the dispatch
  //action measn the type of the state
  //dispatch is used to exceute the reducer
  //state is to hold the state
  //payload the dependecies on which the action depend

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>count={count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>-</button>
    </div>
  );
}

export default Usereducer;
