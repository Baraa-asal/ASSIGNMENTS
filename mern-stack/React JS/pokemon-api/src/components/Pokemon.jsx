import React, { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
      .then((response) => response.json())
      .then((response) => setPokemons(response.results));
  };

  return (
    <div>
      <button onClick={fetchPokemons}>Fetch Pokemon</button>
      {pokemons.length > 0 &&
        pokemons.map((person, index) => {
          return <div key={index}>{person.name}</div>;
        })}
    </div>
  );
};

export default Pokemon;
