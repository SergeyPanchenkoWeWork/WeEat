import { createSelector } from 'reselect';

const getRestaurantsStore = (state) => state.restaurants;

const getRestaurants = createSelector(
    [ getRestaurantsStore ],
    (restaurantsState) => restaurantsState.restaurants
);

const getFiltersHash = createSelector(
    [ getRestaurantsStore ],
    (restaurantsState) => restaurantsState.filtersHash
);

const isLoading = createSelector(
    [ getRestaurantsStore ],
    (restaurantsState) => restaurantsState.isLoading
);

const isLoaded = createSelector(
    [ getRestaurantsStore ],
    (restaurantsState) => restaurantsState.isLoaded
);

export {
    getRestaurants,
    getFiltersHash,
    isLoading,
    isLoaded,
};