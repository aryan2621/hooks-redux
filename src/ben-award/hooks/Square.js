import React from "react";
import Logic from "./Logic";
// const Square = React.memo(({ fav,onClick }) => {
const Square = React.memo(({ fav ,increment }) => {


  Logic();
  //now this logic will prevent the rerendering of the component
  return <button onClick={()=>increment(fav)}>{fav}</button>;
});

export default Square;
