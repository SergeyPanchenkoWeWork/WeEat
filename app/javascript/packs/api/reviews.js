import { executeApiCall } from './index';

const _formatCreateData = ({ message, ...data }) => {
    return {
        ...(message ? { message } : {}),
        ...data,
    };
};

const createReview = (params) => {
    return executeApiCall('reviews', {
        data: _formatCreateData(params),
        method: 'POST',
    });
};

export {
    createReview,
};