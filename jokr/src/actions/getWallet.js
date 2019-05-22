import axios from "axios";

//const path = 'http://localhost:5000/api/wallet'
const path = 'https://jokr.herokuapp.com/api/wallet'


export const GETTING_WALLET = "GETTING_WALLET";
export const WALLET_SUCCESS = "WALLET_SUCCESS";
export const WALLET_FAILED = "WALLET_FAILED";

export const getWallet = () => dispatch => {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token')
  dispatch({ type: GETTING_WALLET });
  axios
  .get(`${path}/${userId}`, {
    headers: { Authorization: token }
  })
    .then(res => {
      console.log(res.data);
      dispatch({ type: WALLET_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: WALLET_FAILED, payload: err });
    });
};
