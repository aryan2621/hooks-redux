import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import Hello from "./Hello";
import Usefetch from "./Usefetch";

//USEEFFECT
//the working of this hooks is to getcalled every time the component get rrerendered at every time the componenet get rendered or mounted

function Useeffect() {
  // const [values, setValues] = useForm({
  //   email: "",
  //   password: "",
  //   firstname: "",
  //   lastname: "",
  // });
  const [showHello, setShowHello] = useState(true);

  //   useEffect(() => {
  //     console.log("render");

  //     //clean function
  //     return () => {
  //       console.log("unmounted");
  //     };
  //   });

  //passing of the arguments

  //   useEffect(() => {
  //     console.log("rendered");
  //     return () => {
  //       console.log("unmounted");
  //     };
  //   }, [values.email]);

  // can have more than one useeffects in any place

  //fetching from the api

  // useEffect(() => {
  //   console.log("rendered");
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     //   console.log("unmounted");
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // });

  //usefetch

  //localstorage and its is  the best practise 
  const [value, setValue] = useState(()=> JSON.parse(localStorage.getItem("value")
   ) )
  const { data, loading } = Usefetch(`http://numbersapi.com/${value}`);

  //this console will print the render everytime the page changes
  ///for the cleanup function renderless or like less times as render only when the password get changed can pass []
  //{[values.password]) this will make render only when pass change known as dependency
  //can have more then one dependencies which are passed
  //it makea it happens by comparing old state of values with everytime with present and if passed parameter get changed then only it get rendered
  //}[]) will make rendered only once
  //cleanup function to release the memory

  ///best example is of the hello example
  //best exmaple for the clean up function is events

  //storage in localstorage
//this will store the current state and even after the render
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);

  return (
    <>
      <div>{!data ? "loading...." : data}</div>
      <button onClick={() => setValue((e) => e + 1)}>+</button>
      {/* {showHello && <Hello />} */}
      <br />
      <br />
      {/* <button onClick={() => setShowHello(!showHello)}>Hello</button> */}
      {/* <input
        type="email"
        name="email"
        id=""
        //this was before the custom hook
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}

        //after the custom hooks
        value={values.email}
        onChange={setValues}
      /> */}
      <br />
      <br />
      {/* <input
        type="password"
        name="password"
        // value={pass}
        // onChange={(e) => setPass(e.target.value)}

        //
        value={values.password}
        onChange={setValues}
      /> */}
      <br />
      <br />
      {/* <input type="text" value={values.firstname} onChange={setValues} />
      <br />
      <br />
      <input type="text" value={values.lastname} onChange={setValues} /> */}
    </>
  );
}

export default Useeffect;
