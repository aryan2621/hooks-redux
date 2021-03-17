import React, { useLayoutEffect, useRef, useState } from "react";
import OnMesaure from "./MeasureHooks";
function UseLayoutsEffects() {
  ///////////USELAYOUTEFFECTS////////////
  //almost similar to useeffect but it fires synchronouusly
  //after the all dom manipulation
  ///measure the box or oaint
  //to get the data before the render get rendered totally
  //pre tag find it -> find it on the google
  //tyhe best example is to use it as the measuring the size of the box and div
  const inputRef = useRef();

  //helpful in getting this
  //and in this type
  useLayoutEffect(() => {
    // console.log(inputRef.current.getBoundingClientRect());
  }, []);
  //   useLayoutEffect(() => {
  //     showRect(inputRef.current.getBoundingClientRect());
  //   }, []);

  //measuring the box
  const [rect, inputRef2] = OnMesaure([]);
  return (
    <div>
      <input type="text" ref={inputRef} />
      {/* <div>{rect}</div> */}
      <input type="text" ref={inputRef2} />
    </div>
  );
}

export default UseLayoutsEffects;
