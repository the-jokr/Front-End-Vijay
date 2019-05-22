import { GETTING_WALLET, WALLET_SUCCESS, WALLET_FAILED } from "../actions";

const initialState = {
  isFetching: false,
  error: null,
  savedJokes: [],
  submittedJokes: []
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
        savedJokes: action.payload,
        submittedJokes: action.payload
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
