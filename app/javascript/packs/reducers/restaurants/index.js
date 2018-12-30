import { createReducer } from '../../modules/redux';
import { ACTIONS_NAME } from './actions';
import { EMPTY_HASH } from '../../modules/hash';

const initState = {
    restaurants: [],
    filtersHash: EMPTY_HASH,
    isLoaded: false,
    isLoading: false,
    hasUpdated: false,
};

export default createReducer({
    [ACTIONS_NAME.SEARCH_RESTAURANTS_STARTED]: (state, action) => ({
        ...state,
        restaurants: action.isInBackground ? state.restaurants : initState.restaurants,
        filtersHash: action.filtersHash,
        isLoaded: false,
        isLoading: true,
        hasUpdated: false,
    }),
    [ACTIONS_NAME.SEARCH_RESTAURANTS_FAILED]: (state, action) => {
        if (state.filtersHash !== action.filtersHash) {
            return state;
        }

        return {
            ...state,
            isLoaded: true,
            isLoading: false,
        };
    },
    [ACTIONS_NAME.SEARCH_RESTAURANTS_DONE]: (state, action) => {
        if (state.filtersHash !== action.filtersHash) {
            return state;
        }

        return {
            ...state,
            restaurants: action.restaurants,
            isLoaded: true,
            isLoading: false,
        };
    },
    [ACTIONS_NAME.RESTAURANTS_UPDATED]: (state, action) => {
        return {
            ...state,
            hasUpdated: true,
        };
    },
}, initState);