import React, {Component} from "react";

class MyNewComponent extends Component {
    render(){
        return (<h2>this is my first component ok {this.props.status ? this.props.firstname : this.props.lastname}</h2>)
    }
}


export default MyNewComponent;