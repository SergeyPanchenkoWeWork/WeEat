import { executeApiCall } from './index';

const searchRestaurants = (params) => {
    return executeApiCall('api/cuisines', {
        params,
    });
};

export {
    searchRestaurants,
};