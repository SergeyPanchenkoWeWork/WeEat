import { isLoading, isLoaded } from './selectors';
import { getAllCuisines } from '../../api/cuisines';

const ACTIONS_NAME = {
    FETCH_CUISINES_STARTED: 'cuisines-fetch-started',
    FETCH_CUISINES_DONE: 'cuisines-fetch-done',
    FETCH_CUISINES_FAILED: 'cuisines-fetch-failed',
};

const fetchCuisinesStarted = () => ({
    type: ACTIONS_NAME.FETCH_CUISINES_STARTED,
});

const fetchCuisinesFailed = () => ({
    type: ACTIONS_NAME.FETCH_CUISINES_FAILED,
});

const fetchCuisinesDone = (cuisines) => ({
    type: ACTIONS_NAME.FETCH_CUISINES_DONE,
    cuisines,
});

const fetchCuisines = () => {
    return (dispatch, getState) => {
        const state = getState();

        if (!isLoaded(state) && !isLoading(state)) {
            dispatch(fetchCuisinesStarted());

            getAllCuisines()
                .then((cuisines) => dispatch(fetchCuisinesDone(cuisines)))
                .catch(() => dispatch(fetchCuisinesFailed()))
        }
    }
};

export {
    ACTIONS_NAME,
    fetchCuisines,
};
