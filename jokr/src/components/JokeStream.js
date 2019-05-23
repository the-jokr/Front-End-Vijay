import React from "react";
import {
  getJokes,
  //  getRandomJoke
  saveJoke
} from "../actions";
import { connect } from "react-redux";
import Joke from "./Joke";
import "../styles/JokeStream.css";

class JokeStream extends React.Component {
  state = {
    savingJoke: null,
 //   savingJokeId: ""
  };

  componentDidMount() {
    this.props.getJokes();
  }

  saveJoke = joke => {
 //   this.setState({ savingJokeId: id });
    this.props.saveJoke(joke);
  };

  render() {
    if (this.props.isFetching) {
      return <div>"Loading ...</div>;
    }

    return (

       <div className="JokeStream">
         <div className="RandomJoke">

           
           </div>
        {this.props.jokes.map(joke => {
          return (
          <div>
            <Joke key={joke.id} joke={joke} />
            <button
              className="save-button"
              onClick={() => this.saveJoke({joke_id: joke.id, author_id: joke.author_id, user_id: localStorage.getItem("userId")})}
            >
              Save
            </button>
          </div>);
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    jokes: state.getJokes.jokes,
    isFetching: state.getJokes.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getJokes, saveJoke }
)(JokeStream);
