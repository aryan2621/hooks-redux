import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

function AddMovies() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((p) => [...p, { name, price }]);
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddMovies;
