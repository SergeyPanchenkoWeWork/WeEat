import { createReducer } from '../../modules/redux';
import { normalizeArrayData} from '../../modules/redux/helpers';
import { ACTIONS_NAME } from './actions';

const initState = {
    cuisines: {},
    isLoaded: false,
    isLoading: false,
};

export default createReducer({
    [ACTIONS_NAME.FETCH_CUISINES_STARTED]: (state) => ({
        ...state,
        isLoaded: false,
        isLoading: true,
    }),
    [ACTIONS_NAME.FETCH_CUISINES_FAILED]: (state) => ({
        ...state,
        isLoaded: true,
        isLoading: false,
    }),
    [ACTIONS_NAME.FETCH_CUISINES_STARTED]: (state, action) => ({
        ...state,
        cuisines: normalizeArrayData(action.cuisines),
        isLoaded: true,
        isLoading: false,
    }),
}, initState);