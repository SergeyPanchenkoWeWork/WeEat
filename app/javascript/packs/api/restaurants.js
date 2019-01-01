import { executeApiCall } from './index';

const _formatParams = (params) => {
    return {
        ...(typeof params.name === 'string' && params.name.length > 0 ? { name: params.name }: {}),
        ...(typeof params.cuisine === 'string' && params.cuisine.length > 0 ? { cuisine: params.cuisine }: {}),
        ...(typeof params.maxDeliveryTime === 'number' ? { max_delivery_time: params.maxDeliveryTime }: {}),
        ...(typeof params.minRating === 'number' ? { rating: params.minRating }: {}),
    };
};

const searchRestaurants = (params) => {
    return executeApiCall('restaurants', {
        params: _formatParams(params),
    });
};

export {
    searchRestaurants,
};