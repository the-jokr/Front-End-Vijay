import React from "react";
import { connect } from "react-redux";
import { getWallet } from "../actions";

class JokeWallet extends React.Component {
  componentDidMount() {
    this.props.getWallet(localStorage.getItem("userId"));
  }
  render() {
    
    return <div />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    savedJokes: state.getWallet.savedJokes,
    submittedJokes: state.getWallet.submittedJokes
  };
};

export default connect(
  mapStateToProps,
  { getWallet }
)(JokeWallet);
