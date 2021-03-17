import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
//this all is the excecution but of dev ed
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>{counter}</h2>
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      {/* concept of payload  */}
      <button onClick={() => dispatch(increment(3))}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <p>Valuable info u dont wann a see</p> : ""}
    </div>
  );
}

export default App;
