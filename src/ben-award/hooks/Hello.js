import React, { useEffect } from "react";
function Hello() {
  useEffect(() => {
    console.log("render");

    //clean function
    return () => {
      console.log("unmounted");
    };
  });

  return <div>hello</div>;
}

export default Hello;
