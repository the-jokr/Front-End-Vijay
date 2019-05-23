import { axiosWithAuth } from "../utils/axiosWithAuth";

export const DELETING_WALLET_JOKE = "DELETING_WALLET_JOKE";
export const DELETE_WALLET_SUCCESS = "DELETE_WALLET_SUCCESS";
export const DELETE_WALLET_FAILED = "DELETE_WALLET_FAILED";

export const deleteSubmittedJoke = id => dispatch => {
    return axiosWithAuth()
    .delete(`https://jokr.herokuapp.com/api/wallet/${id}`)
      .then(res => {
       dispatch({ type: DELETE_WALLET_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_WALLET_FAILED, payload: err });
      });
  };
  