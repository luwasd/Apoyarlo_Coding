import React, { Component } from "react";

class PersonalCard extends Component {
    render (){
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div className="contenedor">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}
export default PersonalCard;