import { executeApiCall } from './index';


const getAllCuisines = () => {
    return executeApiCall('api/cuisines');
};

export {
    getAllCuisines,
};