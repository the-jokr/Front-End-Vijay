import { axiosWithAuth } from "../utils/axiosWithAuth";

export const SAVE_SUCCESS = "SAVE_SUCCESS";
export const SAVE_FAILED = "SAVE_FAILED";

export const saveJoke = joke => dispatch => {
  console.log(joke);
  return axiosWithAuth()
  .post('https://jokr.herokuapp.com/api/wallet/', joke)
    .then(res => {
    //  console.log(res);
      dispatch({ type: SAVE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SAVE_FAILED, payload: err });
    });
};
