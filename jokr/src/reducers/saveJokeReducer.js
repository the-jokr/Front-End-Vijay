import { SAVE_SUCCESS, SAVE_FAILED } from "../actions";

const initialState = {
    jokes: [],
    error: null
};

export const saveJokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                error: null
            };
            case SAVE_FAILED:
            return {
                ...state,
                error: action.payload
            };
            default:
                return state;
}
};
