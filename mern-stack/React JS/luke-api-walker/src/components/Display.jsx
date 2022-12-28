import React from "react";

const Display = (props) => {
  console.log(props.data);

  return (
    <div>
      <h1>{props.data.name}</h1>

      {
        /* Object.keys turns the object into an array so we can use the map method on it */
        Object.keys(props.keys).map((key) => (
          <div key={key}>
            {props.keys[key]} : {props.data[key]}
          </div>
        ))
      }
    </div>
  );
};

export default Display;
