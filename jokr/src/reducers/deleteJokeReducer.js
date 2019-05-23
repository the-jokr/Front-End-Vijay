import { DELETING_JOKE, DELETE_SUCCESS, DELETE_FAILED } from "../actions";

const initialState = {
    jokes: [],
    error: null
};

export const deleteJokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                error: null
            };
            case DELETE_FAILED:
            return {
                ...state,
                error: action.payload
            };
            default:
                return state;
}
};

