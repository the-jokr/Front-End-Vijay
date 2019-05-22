import React from 'react';
import { connect } from 'react-redux';
import { addJoke } from '../actions';

class AddFormForm extends React.Component {

    state = {
        setup: "",
        punch_line: ""
    };
};




export default connect(
    null,
    { addJoke }
)(AddJokeForm);