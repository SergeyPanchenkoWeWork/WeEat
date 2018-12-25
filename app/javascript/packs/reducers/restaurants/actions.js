import { getFiltersHash } from './selectors';
import { searchRestaurants as searchRestaurantsApi } from '../../api/restaurants';
import { hash } from '../../modules/hash';

const ACTIONS_NAME = {
    SEARCH_RESTAURANTS_STARTED: 'restaurants-search-started',
    SEARCH_RESTAURANTS_DONE: 'restaurants-search-done',
    SEARCH_RESTAURANTS_FAILED: 'restaurants-search-failed',
};

const searchRestaurantsStarted = (filtersHash) => ({
    type: ACTIONS_NAME.SEARCH_RESTAURANTS_STARTED,
    filtersHash,
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

const searchRestaurants = (filters) => {
    return (dispatch, getState) => {
        const currentFiltersHash = hash(filters);
        const state = getState();
        const prevFiltersHash = getFiltersHash(state);

        if (currentFiltersHash !== prevFiltersHash) {
            dispatch(searchRestaurantsStarted(currentFiltersHash));

            searchRestaurantsApi(filters)
                .then((restaurants) => dispatch(searchRestaurantsDone(restaurants, currentFiltersHash)))
                .catch(() => dispatch(searchRestaurantsFailed(currentFiltersHash)));
        }
    }
};

export {
    ACTIONS_NAME,
    searchRestaurants,
};