import { getFiltersHash } from './selectors';
import { searchRestaurants as searchRestaurantsApi } from '../../api/restaurants';
import { hash } from '../../modules/hash';

const ACTIONS_NAME = {
    SEARCH_RESTAURANTS_STARTED: 'restaurants-search-started',
    SEARCH_RESTAURANTS_DONE: 'restaurants-search-done',
    SEARCH_RESTAURANTS_FAILED: 'restaurants-search-failed',
    RESTAURANTS_UPDATED: 'restaurants_updated',
};

const searchRestaurantsStarted = (filtersHash, isInBackground) => ({
    type: ACTIONS_NAME.SEARCH_RESTAURANTS_STARTED,
    filtersHash,
    isInBackground,
});

const searchRestaurantsFailed = (filtersHash) => ({
    type: ACTIONS_NAME.SEARCH_RESTAURANTS_FAILED,
    filtersHash,
});

const searchRestaurantsDone = (restaurants, filtersHash) => ({
    type: ACTIONS_NAME.SEARCH_RESTAURANTS_DONE,
    restaurants,
    filtersHash,
});

const searchRestaurants = (filters, { isInBackground, isForced }) => {
    return (dispatch, getState) => {
        const currentFiltersHash = hash(filters);
        const state = getState();
        const prevFiltersHash = getFiltersHash(state);

        if (isForced || currentFiltersHash !== prevFiltersHash) {
            dispatch(searchRestaurantsStarted(currentFiltersHash, isInBackground));

            searchRestaurantsApi(filters)
                .then((restaurants) => dispatch(searchRestaurantsDone(restaurants, currentFiltersHash)))
                .catch(() => dispatch(searchRestaurantsFailed(currentFiltersHash)));
        }
    }
};

const restaurantsUpdated = () => {
    return {
        type: ACTIONS_NAME.RESTAURANTS_UPDATED,
    };
};

export {
    ACTIONS_NAME,
    searchRestaurants,
    restaurantsUpdated,
};