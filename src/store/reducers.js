import { SET_THINGS } from './actions';

const initialState = {
    things: 0
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_THINGS:
            return {
                ...state,
                things: action.things
            };
        default:
            return state;
    }
};

export default app;
