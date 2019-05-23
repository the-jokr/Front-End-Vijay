import { DELETING_WALLET_JOKE, DELETE_WALLET_SUCCESS, DELETE_WALLET_FAILED } from "../actions";


const initialState = {
    submittedJokes: [],
    error: null
};

export const deleteSubmittedJokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_WALLET_SUCCESS:
            return {
                ...state,
                submittedJokes: action.payload,
                error: null
            };
            case DELETE_WALLET_FAILED:
            return {
                ...state,
                error: action.payload
            };
            default:
                return state;
}
};

