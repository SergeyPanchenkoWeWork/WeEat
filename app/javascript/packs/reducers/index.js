import { combineReducers } from 'redux';
import cuisines from './cuisines';
import restaurants from './restaurants';
import createRestaurant from './createRestaurant';

export default combineReducers({
    cuisines,
    restaurants,
    createRestaurant,
});