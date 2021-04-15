import { combineReducers } from "redux";
import userReducer from './reducer/user.reducer';

const rootReducer = combineReducers({
    users : userReducer
})

export default rootReducer;