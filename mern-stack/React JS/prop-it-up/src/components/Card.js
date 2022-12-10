import React from "react";

class Card extends React.Component {

    render(){
       console.log(this.props);
        return (
            <div>
                <h1>{`${this.props.lastname}, ${this.props.firstname}`}</h1>
                <h4>{`Age: ${this.props.age}`}</h4>
                <h4>{`Hair Color: ${this.props.haircolor}`}</h4>
            </div>
        )
    }
}


export default Card;