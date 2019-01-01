import { createReducer } from '../../modules/redux';
import { ACTIONS_NAME } from './actions';
import { EMPTY_HASH } from '../../modules/hash';
import { REQUEST_STATUS } from '../../modules/enum';

const initState = {
    paramsHash: EMPTY_HASH,
    status: REQUEST_STATUS.INIT,
};

export default createReducer({
    [ACTIONS_NAME.CREATE_RESTAURANT_CLEAR]: (state, action) => (initState),
    [ACTIONS_NAME.CREATE_RESTAURANT_STARTED]: (state, action) => {
        return {
            ...state,
            paramsHash: action.paramsHash,
            status: REQUEST_STATUS.LOADING,
        }
    },
    [ACTIONS_NAME.CREATE_RESTAURANT_FAILED]: (state, action) => {
        if (state.paramsHash !== action.paramsHash) {
            return state;
        }

        return {
            ...state,
            status: REQUEST_STATUS.FAILED,
        };
    },
    [ACTIONS_NAME.CREATE_RESTAURANT_DONE]: (state, action) => {
        if (state.paramsHash !== action.paramsHash) {
            return state;
        }

        return {
            ...state,
           status: REQUEST_STATUS.DONE,
        };
    },
}, initState);