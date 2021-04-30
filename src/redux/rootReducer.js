import { combineReducers } from "redux";
import userReducer from './reducer/user.reducer';
import taskReducer from './reducer/task.reducer'

const rootReducer = combineReducers({
    users : userReducer,
    task : taskReducer
});

export default rootReducer;