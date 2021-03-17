import { useState, useRef, useLayoutEffect } from "react";



export  const OnMeasure = (deps) => {
  const [rect, setTRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    setTRect(myRef.current.getBoundingClientRect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [rect, myRef];
};
export default OnMeasure