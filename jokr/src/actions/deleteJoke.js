import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//const path = 'http://localhost:5000/api/wallet'
//const path = 'https://jokr.herokuapp.com/api/jokes./:id'

// INCOMPLETE

export const DELETING_JOKE = "DELETING_JOKE";
export const DELETE_SUCCESS = "DELETING_JOKE";
export const DELETE_FAILED = "DELETING_JOKE";

// export const deleteJoke = () => dispatch => {
//   const userId = localStorage.getItem('userId');
//   const token = localStorage.getItem('token')
//   dispatch({ type: DELETING_JOKE });
//   axios
//   .delete(`${path}/${userId}`, {
//     headers: { Authorization: token }
//   })
//     .then(res => {
//       console.log(res.data);
//       dispatch({ type: DELETE_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({ type: DELETE_FAILED, payload: err });
//     });
// };


export const deleteJoke = joke => dispatch => {
    return axiosWithAuth()
    .delete(`https://jokr.herokuapp.com/api/jokes/${joke.id}`)
      .then(res => {
       dispatch({ type: DELETE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_FAILED, payload: err });
      });
  };
  