import axios from "axios";
const path = 'http://localhost:5000/api/auth/login'

//const path = 'https://jokr.herokuapp.com/api/auth/login'

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(path, creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.id)
      dispatch({ type: LOGIN_SUCCESSFUL });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, error: err });
    });
};
