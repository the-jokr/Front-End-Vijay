import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//const path = 'http://localhost:5000/jokes'
const path = 'https://jokr.herokuapp.com/api/jokes'

// export const ADDING_JOKES = "ADDING_JOKES";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

export const addJoke = joke => dispatch => {
  return axiosWithAuth()
  .post(path, joke)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FAILED, payload: err });
    });
};
