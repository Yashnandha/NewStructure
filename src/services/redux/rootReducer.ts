import {combineReducers} from 'redux';
import userReducer from './userReducer/reducer';
const RootReducer = combineReducers({
  userReducer,
});

export default RootReducer;
