import React from "react";
import { connect } from "react-redux";
import {
  getWallet,
  editJoke,
  deleteJoke,
  deleteSubmittedJoke,
  //editJoke
} from "../actions";

class JokeWallet extends React.Component {
  state = {
    deletingJoke: null,
    deletingJokeId: "",
    edittingJokeId: ''
  };

  componentDidMount() {
    this.props.getWallet();
  }

  deleteJoke = id => {
    this.setState({ deletingJokeId: id });
 //   this.props
 //   .deleteSubmittedJoke(id)
    this.props.deleteJoke(id)
    .then(() => this.props.getWallet())
//    .then(res => this.props.history.push("jokewallet"))
    ;
  };

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
            <div key={joke.id}>
              <h3>{joke.setup}</h3>
              <h3>{joke.punch_line}</h3>
              <button
                className="delete-button"
                onClick={() => this.deleteJoke(joke.id)}
              >
                Delete
              </button>
              <button
                className="edit-button"
                onClick={() => this.editJoke(joke.id)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        <div className="saved-jokes">
          <h1>Saved Jokes</h1>

          {this.props.savedJokes.map(joke => (
            <div key={joke.id}>
              <h3>{joke.setup}</h3>
              <h3>{joke.punch_line}</h3>
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
    savedJokes: state.getWallet.savedJokes,
   };
};

export default connect(
  mapStateToProps,
  {
    getWallet,
    deleteJoke,
    deleteSubmittedJoke,
    editJoke
    //editJoke
  }
)(JokeWallet);
