import React from "react";
    const Card = ({firstname, lastname, age, haircolor} )=>{
       //i can pass props to Card function, or just I can destructure the variables that i need just like that, and i dont write props.firstname, i use firstname 3atool
        return (
            <div>
                <h1>{`${lastname}, ${firstname}`}</h1>
                <h4>{`Age: ${age}`}</h4>
                <h4>{`Hair Color: ${haircolor}`}</h4>
            </div>
        )
    }

export default Card;