import { combineReducers } from 'redux';
import user from './user/reducer';

const IndexReducer = combineReducers({
  user,
});

export default IndexReducer;