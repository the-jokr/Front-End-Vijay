import React from "react";
import { connect } from "react-redux";
import { addJoke } from "../actions";
import "../styles/AddJoke.css";

class AddJokeForm extends React.Component {
  state = {
    setup: "",
    punch_line: "",
  //  author: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
    .addJoke(this.state)
    .then(res => this.props.history.push("/jokestream"));
  };

  render() {
    console.log(this.props);
    return (
      <div className="AddJokeContainer">
        <form className="add-joke" onSubmit={this.handleSubmit}>
          <h2>Add your joke. Enter a setup and punchline:</h2>

          <input
            name="setup"
            onChange={this.handleChange}
            placeholder="Setup here"
            value={this.state.setup}
          />

          <input
            name="punch_line"
            onChange={this.handleChange}
            placeholder="Punchline here"
            value={this.state.punch_line}
          />

          {/* <input
            name="author"
            onChange={this.handleChange}
            placeholder="Your handle"
            value={this.state.author}
          /> */}

          <button>Submit Joke</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addJoke }
)(AddJokeForm);
