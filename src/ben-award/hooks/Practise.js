import React from "react";
import Logic from "./Logic";
const Practise = React.memo(({ increment }) => {
  Logic();
  return <button onClick={() => increment(3)}>Hello</button>;
});

export default Practise;
