import React, { useCallback, useState } from "react";
import Practise from "./Practise";
import Square from "./Square";

function UseCallback() {
  //////USECALLBACK///////
  //helps in rerendering of the content
  //we can also use the usememo which is the alternate
  //everytime the function get rendered it get created  everytime
  //if we make the memon of this then this
  //to orevent everytim the rerendering
  //memo think if the props of the component  change then it rendererd
  //the componenet
  //practise increment  if change then rerender
  //react always rerendered if the parents get changed
  //c=>c+1 it is independent ojn count so no rendering

  //most in case of making the loops

  const [count, setCount] = useState(0);
  const favcount = [2,3,4]



  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
      ///can return the values
    },
    [setCount]
  );
  // can pass the paramater in it
  return (
    <div>
      <Practise increment={increment} />
      <div>Count :{count}</div>
      {favcount.map(fav=>{
        return(
          // <Square onClick={()=>increment(fav)} fav={fav} />
          // this is the task that we have to perform 
          <Square increment={increment} fav={fav}/>

        )
      })}
    </div>
  );
}

export default UseCallback;
