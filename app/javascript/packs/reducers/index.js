import { combineReducers } from 'redux';
import cuisines from './cuisines';
import restaurants from './restaurants';

export default combineReducers({
    cuisines,
    restaurants,
});