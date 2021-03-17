import { useState } from "react";
//it i sthe example of the custom hooks
// where we do the own definitoon of the self made hooks

export const useForm = (initialValues) => {
  //initial values helps in passing the parameter
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
  //can return the values or the set of values as array
  // e=>.... is an onchange function
  // second line is for attaching the change according to the name
  //now the custom hooks is a logic we can appply to any form
};
