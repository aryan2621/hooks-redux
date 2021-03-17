import React from "react";

function Movie({ name,price }) {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>

    </div>
  );
}

export default Movie;
