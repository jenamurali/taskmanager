import {UserType}  from '../action/user/user.actiontype';

const defaultState = {
    allUsers : []
}

const userReducer = (state = defaultState,action) => {
    switch (action.type) {
        case UserType.FETCH_USER:
            return {
                ...state,
                allUsers : [...action.allUsers]
            }    
        default:
            return {
                ...state
            }
    }
}

export default userReducer;