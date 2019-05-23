import { ADD_SUCCESS, ADD_FAILED } from "../actions";

const initialState = {
    jokes: [],
    error: null
};

export const addJokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                error: null
            };
            case ADD_FAILED:
            return {
                ...state,
                error: action.payload
            };
            default:
                return state;
}
};
