import React from "react";
import { connect } from "react-redux";
import { getWallet } from "../actions";

class JokeWallet extends React.Component {

  componentDidMount() {
    this.props.getWallet();
    }
  render() {

    console.log(this.props);

    if (this.props.isFetching) {
      return <div>Stand by ... loading.</div>
    }
    
    return (
    <div className="WalletList">
      <h1>My Jokes</h1>
      <div className="my-joke-list">
        {this.props.submittedJokes.map(joke => (
          <div key={joke.id}>
            <h2>{joke.setup}</h2>
            <h2>{joke.punch_line}</h2>
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
  { getWallet }
)(JokeWallet);
