import { createSelector } from 'reselect';
import { REQUEST_STATUS } from '../../modules/enum';

const getCreateRestaurantStore = (state) => state.createRestaurant;

const isLoading = createSelector(
    [ getCreateRestaurantStore ],
    (createRestaurantState) => createRestaurantState.status === REQUEST_STATUS.LOADING
);

const isLoaded = createSelector(
    [ getCreateRestaurantStore ],
    (createRestaurantState) => createRestaurantState.status === REQUEST_STATUS.DONE,
);

export {
    isLoading,
    isLoaded,
};