import State from '../store/index'

const CHANGE_SHELF = 'CHANGE_SHELF'

const reducerName = (state = State , action) => {
    switch (action.type) {
        case CHANGE_SHELF:
            return state
        default:
            return state
    }
}

export default reducerName