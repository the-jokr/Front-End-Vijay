import React from "react";
import { connect } from "react-redux";
import { editJoke } from "../actions";
// import "../styles/AddJoke.css";

class EditJokeForm extends React.Component {
  state = {
    setup: this.props.setup,
    punch_line: this.props.punch_line,
    jokeid: this.props.id
  //  author: ""
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };


  editJoke = id => {
    this.setState({ edittingJokeId: id });
    this.props.editJoke(id)
    .then(() => this.props.getWallet())
    ;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
    .editJoke(this.state)
    .then(res => this.props.history.push("/jokestream"));
  };

  render() {
    console.log(this.props);
    return (
      <div className="Edit-JokeContainer">
        <form className="edit-joke" onSubmit={this.handleSubmit}>
          <h2>Edit your joke for the perfect imperfection!:</h2>

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

          <button>Save and Exit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { editJoke}
)(EditJokeForm);
