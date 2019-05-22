import { GETTING_WALLET, WALLET_SUCCESS, WALLET_FAILED } from "../actions";

const initialState = {
  isFetching: false,
  savedJokes: [],
  submittedJokes: [],
  error: null
};

export const getWalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_WALLET:
      return {
        ...state,
        isFetching: true
      };
    case WALLET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        savedJokes: action.payload.savedJokes,
        submittedJokes: action.payload.submittedJokes
        };
    case WALLET_FAILED:
      return {
          ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
