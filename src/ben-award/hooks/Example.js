import React, { useRef } from "react";

function Example() {
  //we can update the values like this
  // just by taking the refeence like this
  //and do work

  const renders = useRef(0);
  //   console.log(renders);
  console.log((renders.current = renders.current + 1));
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default Example;
