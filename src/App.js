import React from "react";
import AddMovies from "./AddMovies";
import MovieProvider, { MovieContext } from "./MovieContext";
import Movielist from "./Movielist";
import Nav from "./Nav";

function App() {
  // can imagine the same concept
  // of the redux as the either u can pass
  //data through passingh through each and every component
  //or you can do that by context api
  //supoose we want to access the movie in the nav but for
  //we also have to pass like nav in movie list and then we
  // can pass but its not good to define nav in movie list
  //one is to uplift the state so that in app the list pass and then its available to all but its not good

  return (
    <div>
      <MovieProvider>
        <Nav />
        <AddMovies/>
        <Movielist />
      </MovieProvider>
    </div>
  );
}

export default App;
