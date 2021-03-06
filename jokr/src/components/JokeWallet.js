import React from "react";
import { connect } from "react-redux";
import {
  getWallet,
  editJoke,
  deleteJoke,
  deleteSubmittedJoke
  //editJoke
} from "../actions";

import JokeCard from "./JokeCard";

import { Link} from 'react-router-dom';


class JokeWallet extends React.Component {
  state = {
    deletingJoke: null,
    edittingJoke: false,
    deletingJokeId: "",
    edittingJokeId: ""
  };

  componentDidMount() {
    this.props.getWallet();
  }

  deleteJoke = id => {
    this.setState({ deletingJokeId: id });
    this.props.deleteJoke(id).then(() => this.props.getWallet());
  };

  // openEditForm = () => {
  //   this.setState({ edittingJoke: !this.state.edittingJoke });
  // };

  render() {
    console.log(this.props);

    if (this.props.isFetching) {
      return <div>Stand by ... loading.</div>;
    }

    return (
      <div className="WalletList">
        <div className="my-joke-list">
          <h1>My Jokes</h1>

          {this.props.submittedJokes.map(joke => (
            < JokeCard key={joke.id} joke={joke} deleteJoke={this.deleteJoke} />
          ))}
        </div>

        <div className="AddJokeDiv">

        <Link to="/add-joke">
                <button color="white" className="is-rounded">
                  Add a Joke
                </button>
              </Link>



        </div>

        <div className="saved-jokes">
          <h1>Saved Jokes</h1>
          

          {this.props.savedJokes.map(joke => (
            <div className="JokeCard">
            <div key={joke.id}>
              <h3>{joke.setup}</h3>
              <h3>{joke.punch_line}</h3>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.getWallet.isFetching,
    submittedJokes: state.getWallet.submittedJokes,
    savedJokes: state.getWallet.savedJokes
  };
};

export default connect(
  mapStateToProps,
  {
    getWallet,
    deleteJoke,
    deleteSubmittedJoke,
    editJoke
  }
)(JokeWallet);
