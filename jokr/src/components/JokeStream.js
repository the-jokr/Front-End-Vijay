import React from "react";
import { getJokes } from "../actions";
import { connect } from "react-redux";
import Joke from "./Joke";

class JokeStream extends React.Component {
  componentDidMount() {
      this.props.getJokes();
  }

  render() {
    return (
      <div className="JokeStream">
        {this.props.jokes.map(joke => {
          return <Joke joke={joke} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        jokes: state.jokes,
        getJokes: state.getJokes
    };
};

export default connect(
    mapStateToProps,
    { getJokes }
)(JokeStream);
