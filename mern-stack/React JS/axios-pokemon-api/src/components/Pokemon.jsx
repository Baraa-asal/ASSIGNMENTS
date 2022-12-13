import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpinningCircles } from "react-loading-icons";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemons = () => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
      .then((response) => {
        //this (then) function is called after the data is fetched.
        setTimeout(() => {
          //to mimic that the data needs time so i can show the loading icon(spinner)
          setIsLoading(false); //here the data is loaded, so we set it false again
          setPokemons(response.data.results);
        }, 3000);
      });
  };

  return (
    <div>
      <button onClick={fetchPokemons}>Fetch Pokemon</button>
      {/* if there is no loading and the data is fetched, map it */}
      {!isLoading &&
        pokemons?.length > 0 &&
        pokemons.map((person, index) => {
          return <div key={index}>{person.name}</div>;
        })}
      {/* if isloading is true, show the spinning icon */}
      {isLoading && (
        <div>
          <SpinningCircles stroke="#98ff98" strokeOpacity={0.125} speed={0.8} />
        </div>
      )}
    </div>
  );
};

export default Pokemon;
