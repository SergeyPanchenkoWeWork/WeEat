import { createRestaurant as createRestaurantApi } from '../../api/restaurants';
import { hash } from '../../modules/hash';

const ACTIONS_NAME = {
    CREATE_RESTAURANT_CLEAR: 'restaurant-create-clear',
    CREATE_RESTAURANT_STARTED: 'restaurant-create-started',
    CREATE_RESTAURANT_DONE: 'restaurant-create-done',
    CREATE_RESTAURANT_FAILED: 'restaurant-create-failed',
};

const createRestaurantStarted = (paramsHash) => ({
    type: ACTIONS_NAME.CREATE_RESTAURANT_STARTED,
    paramsHash,
});

const createRestaurantFailed = (paramsHash) => ({
    type: ACTIONS_NAME.CREATE_RESTAURANT_FAILED,
    paramsHash,
});

const createRestaurantDone = (paramsHash) => ({
    type: ACTIONS_NAME.CREATE_RESTAURANT_DONE,
    paramsHash,
});

const createRestaurant = (params) => {
    return (dispatch) => {
        const paramsHash = hash(params);
        dispatch(createRestaurantStarted(paramsHash));

        createRestaurantApi(params)
            .then((restaurant) => dispatch(createRestaurantDone(paramsHash)))
            .catch(() => dispatch(createRestaurantFailed(paramsHash)));
    }
};

const clearData = () => {
    return {
        type: ACTIONS_NAME.CREATE_RESTAURANT_CLEAR,
    };
};

export {
    ACTIONS_NAME,
    createRestaurant,
    clearData,
};