import ActionType from './globalAction'

const globalState = {
    searchValue: '',
    something: ''
}

const rootReducer = (state = globalState, action) => {
    if (action.type === ActionType.CHANGE_SEARCH_VALUE) {
        return{
            ...state, 
            searchValue: action.value
        }
    }
    return state
} 

export default rootReducer