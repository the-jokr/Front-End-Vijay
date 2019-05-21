// import {
//   Card,
//   CardBody,
//   Button,
//   CardTitle,
//   CardText,
//   CardImg
// } from "reactstrap";

import React from "react";
import "../styles/JokeCard.css";

class Joke extends React.Component {
  render() {
    return (
    <div className="JokeCard">
      <div className="Setup">
        {this.props.setup}
      </div>
      <div className="Punchline">
        {this.props.punch_line}
      </div>
      
    </div>
    )};
}

export default Joke;

