import { SET_THINGS } from './actions'

export interface IState {
    things: number
}

export const initialState: IState = {
    things: 0
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_THINGS:
            if (action.things !== undefined && action.things !== null) {
                window.localStorage.setItem(SET_THINGS, action.things.toString(10))
            }
            return {
                ...state,
                things: action.things,
            }
        default:
            return state
    }
}

export default reducers
