import React from "react";
import { getJokes,
//  getRandomJoke
} from "../actions";
import { connect } from "react-redux";
import Joke from "./Joke";
import "../styles/JokeStream.css";

class JokeStream extends React.Component {

  state = {
    savingJoke: null,
    savingJokeId: "",
  };

  componentDidMount() {
      this.props.getJokes();
  }


  saveJoke = id => {
    this.setState({ savingJokeId: id });
    this.props.saveJoke(id)
   ;
  };




  render() {

    if (this.props.isFetching) {
      return <div>"Loading ...</div>
      }
      

    return (
      <div className="JokeStream">
        {this.props.jokes.map(joke => {
          return <Joke key={joke.id} joke={joke}> 
          <button
                className="save-button"
                onClick={() => this.saveJoke(joke.id)}
              >Save
              </button>
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
    { getJokes,
    saveJoke
   }
)(JokeStream);
