import React from "react";
    const Card = ({firstname, lastname, age, haircolor} )=>{
       
        return (
            <div>
                <h1>{`${lastname}, ${firstname}`}</h1>
                <h4>{`Age: ${age}`}</h4>
                <h4>{`Hair Color: ${haircolor}`}</h4>
            </div>
        )
    }

export default Card;