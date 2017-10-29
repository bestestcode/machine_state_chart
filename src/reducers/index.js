import { combineReducers } from 'redux';
import toggleReducer from './toggle';

const allReducers = combineReducers({
  toggles: toggleReducer,
});

export default allReducers;
