import { useEffect, useState } from "react";

const Usefetch = (url) => {
  //checking the data is empty or not
  const [state, setState] = useState({ data: null, loading: true });
  //setting the state of loader if the data is not setteled
  useEffect(() => {
    setState(state=>({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        console.log(y);
        //setting the data and loading as the false
        setState({ data: y, loading: false });
        //if u remove the url from [] it will give the warining
        //can add the setstate in the passing 
        //dependencies should not be changing based on the 
        //code you written otherwise will get stuck in infinite 
        //loop
      });
  }, [url,setState]);
  return state;
};
export default Usefetch;
