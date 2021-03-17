import React, { useEffect, useRef, useState } from "react";
import Example from "./Example";

// /USEREF
// having the functionality to store th
// refernce of the objectss
//like referencing the typing in the inputs
//input.current will give the tag and .value will give the value
//helps in using at the other places and also in the props
//can be objects can be functions
//that can also nbe do for the
function Useref() {
  const [show, setShow] = useState(true);
  const inputRef = useRef();
  //example of the passing of the functions
  const hello = useRef(() => console.log("hello"));

  useEffect(() => {
    console.log("rendered");
  });
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter the values" />
      <br />
      <button onClick={() => console.log(inputRef.current)}>Click me</button>

      <button onClick={() => inputRef.current.focus()
    ,hello.current()
    }>Click me</button>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Example />}
    </div>
  );
}

export default Useref;
