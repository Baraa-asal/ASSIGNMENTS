import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
    }

    render(){
        return (
            <div>
                <h1>{`${this.props.lastname}, ${this.props.firstname}`}</h1>
                <h4>{`Age: ${this.state.age}`}</h4>
                <h4>{`Hair Color: ${this.props.haircolor}`}</h4>
                <button onClick={ () => { this.setState({age: this.state.age+1}) } }>Birthday Button for {`${this.props.firstname} ${this.props.lastname}`}</button>
            </div>
        )
    }
}


export default Card;