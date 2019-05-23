import { axiosWithAuth } from "../utils/axiosWithAuth";

export const DELETING_JOKE = "DELETING_JOKE";
export const DELETE_SUCCESS = "DELETING_JOKE";
export const DELETE_FAILED = "DELETING_JOKE";

export const deleteJoke = id => dispatch => {
    return axiosWithAuth()
    .delete(`https://jokr.herokuapp.com/api/jokes/${id}`)
      .then(res => {
       dispatch({ type: DELETE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_FAILED, payload: err });
      });
  };
  