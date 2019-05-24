import React from "react";
import {
  getJokes,
  //  getRandomJoke
  saveJoke
} from "../actions";
import { connect } from "react-redux";
import Joke from "./Joke";
import "../styles/JokeStream.css";
import "../styles/JokeCard.css";

class JokeStream extends React.Component {
  state = {
    savingJoke: null,
    //   savingJokeId: ""
    input: ''
  };

  componentDidMount() {
    this.props.getJokes();
  }

  saveJoke = joke => {
    //   this.setState({ savingJokeId: id });
    this.props.saveJoke(joke);
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.props.isFetching) {
      return <div>"Loading ...</div>;
    }

    let jokes = [...this.props.jokes].filter(joke => joke.setup.includes(this.state.input) || joke.punch_line.includes(this.state.input));
    

    return (
      <div className="JokeStream">
        <input type="text" placeholder="search for joke" name="input" value={this.state.input} onChange={this.handleChange}/>

        {/* <div className="RandomJoke" /> */}
        {jokes.map(joke => {
          return (
            <div className="JokeCardContainer">
              <Joke key={joke.id} joke={joke} />
              <button
                onClick={() =>
                  this.saveJoke({
                    joke_id: joke.id,
                    author_id: joke.author_id,
                    user_id: localStorage.getItem("userId")
                  })
                }
              >
                Save
              </button>
            </div>
          );
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
