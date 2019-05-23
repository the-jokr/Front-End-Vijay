import axios from "axios";


export const FETCHING_RANDOM = "FETCHING_RANDOM";
export const RANDOM_SUCCESS = "RANDOM_SUCCESS";
export const RANDOM_FAIL = "RANDOM_FAIL";

export const getRandomJoke = () => dispatch => {
  dispatch({ type: FETCHING_RANDOM });
  axios
    .get('https://jokr.herokuapp.com/api/jokes/random')
    .then(res => {
      console.log(res);
      dispatch({ type: RANDOM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: RANDOM_FAIL, payload: err });
    });
};



// export const getJokes = () => dispatch => {
//   const userId = localStorage.getItem('userId');
//   const token = localStorage.getItem('token')
//   dispatch({ type: FETCHING_JOKES });
//   axios
//   .get(`${path}/${userId}`, {
//     headers: { Authorization: token }
//   })
//     .then(res => {
//       console.log(res.data);
//       dispatch({ type: FETCHING_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({ type: FETCHING_FAIL, payload: err });
//     });
// };
