// put with auth

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const EDITTING_WALLET_JOKE = "EDITTING_WALLET_JOKE";
export const EDIT_WALLET_SUCCESS = "EDIT_WALLET_SUCCESS";
export const EDIT_WALLET_FAILED = "EDIT_WALLET_FAILED";

export const editJoke = id => dispatch => {
    return axiosWithAuth()
    .put(`https://jokr.herokuapp.com/jokes/${id}`)
      .then(res => {
       dispatch({ type: EDIT_WALLET_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: EDIT_WALLET_FAILED, payload: err });
      });
  };
  