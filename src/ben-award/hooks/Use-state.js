//////**************hooks************ *////////

//only can use with functional components
//can also may use the arrow functions or the just function
//cant nest the inside the loops
//some eslint tohighlight the errors prinstalled in nodejs
//or come with the create-react-app

//USESTATE HOOK
//store the intial value and and a function return from it
//it returns an array of initail value and a functions
//it usual/y used by destructuing them
//way it is accessed by{value}
//in setvalue the function can aslo be passed
//the second is better thean the first one as it help in getting the previoous values and as well as prevent to many updates
//can use multiple state objects

import React, { useState } from "react";
import { useForm } from "./useForm";
function App() {
  // const [value, setValue] = useState(10);
  // const [{ count1, count2 }, setCount] = useState({ count1: 1, count2: 10 });
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState(20);

  // forms

  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");

  //after defining the custom hooks form
  const [values, setValues] = useForm({ email: "", password: "" });

  //abouve example is for the storage of objects
  return (
    <div className="App">
      {/* for the case one <button onClick={()=>setValue(value+1)}>Click me</button> */}
      {/* for the  case of values <button onClick={() => setValue((c) => c + 1)}>Click me</button> */}
      {/* now the only onclick={()=>ssetcount(c=>c+1)}  will not workd  as now the setcount will hace parameter c that will update the whole object not the single value so have to look ate the both values adn on click the second value will disappear so to retain use spread operator as ...c 
      also can do as count2:c.count2
      */}
      <h2>{value1}</h2>
      <h2>{value2}</h2>
      {/* <button
        onClick={() =>
          setCount((c) => ({
            count2: c.count2,
            count1: c.count1 + 1,
          }))
        }
      >
        Increaeement
      </button> */}
      {/* <button onClick={() => setValue1((c) => c + 1)}>Value1</button>
      <button onClick={() => setValue2((c) => c + 1)}>Value2</button> */}
      {/* for ji=oining in the one */}
      <button
        onClick={() => {
          setValue1((c) => c + 1);
          setValue2((c) => c + 1);
        }}
      >
        +
      </button>
      <br />
      <br />
      {/* form example  */}
      <input
        type="email"
        name="email"
        id=""
        //this was before the custom hook
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}

        //after the custom hooks
        value={values.email}
        onChange={setValues}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        // value={pass}
        // onChange={(e) => setPass(e.target.value)}

        //
        value={values.password}
        onChange={setValues}
      />
    </div>
    // can do the both hooks for the custom hooks
    //use before the name is must
  );
}

export default App;
