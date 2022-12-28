import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import Display from "./Display";
import SearchForm from "./SearchForm";
const categoryKeys = {
  people: {
    height: "Height",
    mass: "Mass",
    hair_color: "Hair Color",
    skin_color: "Skin Color",
  },
  planets: {
    climate: "Climate",
    terrain: "Terrain",
    surface_water: "Surface Water",
    population: "Population",
  }
}
const Main = () => {
  const [data, setData] = useState({});
  const [keys, setKeys] = useState({});
  const { category, id } = useParams();
 
  useEffect(() => {
    if (!category || !id) {
      return ()=>{

      }
    }
    axios.get(`https://swapi.dev/api/${category}/${id}`).then((response) => {
      setData(response.data);
    });
    setKeys(categoryKeys[category]);
  }, [category, id]);
  return (
    <div>
      <SearchForm initId={id} initCategory={category}/>
      <Display data={data} keys={keys} />
    </div>
  );
};

export default Main;
