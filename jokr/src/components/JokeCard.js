import React from 'react';
import EditJokeForm from "./editJokeForm";


class JokeCard extends React.Component {
constructor() {
    super();
    this.state = {
        edittingJoke: false
    }


}

openEditForm = () => {
    this.setState({ edittingJoke: !this.state.edittingJoke });
  };


    render() {
        return (
<div>
              {!this.state.edittingJoke && (
                <div className="JokeCard">
                  <h3>{this.props.joke.setup}</h3>
                  <h3>{this.props.joke.punch_line}</h3>
                  <button
                    className="button"
                    onClick={() => this.props.deleteJoke(this.props.joke.id)}
                  >
                    Delete
                  </button>
                  <button className="button" onClick={this.openEditForm}>
                    Edit
                  </button>
                </div>
              )}
              {this.state.edittingJoke && (
                <EditJokeForm joke={this.props.joke} closeForm={this.openEditForm} />
              )}
            </div>

    )}

}


export default JokeCard;
