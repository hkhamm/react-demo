import { SET_THINGS } from './actions'

const initialState = {
    things: 0
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_THINGS:
            if (action.things !== undefined && action.things !== null) {
                window.localStorage.setItem(SET_THINGS, action.things.toString(10))
            }
            return {
                ...state,
                things: action.things
            }
        default:
            return state
    }
}

export default app
