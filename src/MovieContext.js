import React, { createContext, useState } from "react";

const MovieContext = createContext();

function MovieProvider(props) {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "100",
      id: 1,
    },
    {
      name: "Avengers",
      price: "100",
      id: 2,
    },
    {
      name: "Pirates of the Caribiean",
      price: "100",
      id: 3,
    },
    {
      name: "Ben 10 ultimate aliean",
      price: "100",
      id: 4,
    },
  ]);
  //it helps in providing the context to each and
  //every component
  //use of children
  return (
    <div>
      <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
}

export default MovieProvider;
export { MovieContext };
