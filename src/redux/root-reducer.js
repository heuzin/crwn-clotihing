import { combineReducers } from 'redux';
import userReducer from './user/user.reduxer';

export default combineReducers({
    user: userReducer
});