import { useRef } from "react";

const Logic = () => {
  const renders = useRef(0);
  console.log("renders:", renders.current++);
};
export default Logic;
