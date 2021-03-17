import React from "react";
import { useSelector } from "react-redux";

function Redux() {
  //supoose you are making the
  // movie app and now you want to have
  //            APP
  //       SEARCH MOVIELIST LOGIN
  //             MOVIE
  // and now if you want to move data its only possible to
  // move to download so if its in the movielist
  // can pass through movie(unidirectional)
  // and if you put all thta in the app
  // thats okay but it make no sense to put data in app component
  //as its is of no use for it
  //////////////
  //REDUX
  // what it does as it kept that data that has to be passthrough
  //in another place and in any place if you want to use it
  //can access with bit of code
  //ben award tutorial
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div>
      <h1>{counter}</h1>
      {isLogged ? <h3>{isLogged}</h3> : ""}
      <button>Login </button>
    </div>
  );
}

export default Redux;
