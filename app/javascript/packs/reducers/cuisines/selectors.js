import { createSelector } from 'reselect';

const getCuisinesStore = (state) => state.cuisines;

const getCuisines = createSelector(
    [ getCuisinesStore ],
    (cuisinesState) => cuisinesState.cuisines
);

const isLoading = createSelector(
    [ getCuisinesStore ],
    (cuisinesState) => cuisinesState.isLoading
);

const isLoaded = createSelector(
    [ getCuisinesStore ],
    (cuisinesState) => cuisinesState.isLoaded
);

export {
    getCuisines,
    isLoading,
    isLoaded,
};