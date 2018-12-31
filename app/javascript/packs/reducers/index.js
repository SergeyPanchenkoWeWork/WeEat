import { combineReducers } from 'redux';
import cuisines from './cuisines';
import restaurants from './restaurants';
import createRestaurant from './createRestaurant';
import createReview from './createReview';

export default combineReducers({
    cuisines,
    restaurants,
    createRestaurant,
    createReview,
});