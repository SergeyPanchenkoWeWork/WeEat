import { executeApiCall } from './index';


const getAllCuisines = () => {
    return executeApiCall('cuisines');
};

export {
    getAllCuisines,
};