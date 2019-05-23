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

const Joke = props => {
    console.log(props)
  
    return (
    
    <div className="JokeCard">
      <div className="Setup">
        {props.joke.setup}
      </div>

      <div className="Punchline">
        {props.joke.punch_line}
      </div>

      <div className="Likes">
        {props.joke.likes}
      </div>
      

      <div className="By">
        {props.joke.author}
      </div>


      <div className="By">
        {props.joke.id}
      </div>

      </div>
    )};


export default Joke;

