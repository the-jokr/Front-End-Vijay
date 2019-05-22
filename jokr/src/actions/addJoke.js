import { axiosWithAuth } from "../utils/axiosWithAuth";

const path = 'https://jokr.herokuapp.com/api/jokes'

export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

export const addJoke = joke => dispatch => {
  //console.log(joke);
  return axiosWithAuth()
  .post(path, joke)
    .then(res => {
    //  console.log(res);
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FAILED, payload: err });
    });
};
