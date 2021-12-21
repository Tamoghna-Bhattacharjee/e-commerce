import { combineReducers } from "redux";
import user_reducer from './user/user_reduser.jsx';

export default combineReducers({
    user: user_reducer
});