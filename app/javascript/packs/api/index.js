import axios from 'axios';

import config from '../config';

const errorHandler = (e) => {
   console.log(e);
   return Promise.reject(e);
};

const defaultConfig = {
    method: 'GET',
    params: {},
    data: {},
};

const executeApiCall = (path, callConfig = {}) => {
    return axios({
        ...defaultConfig,
        ...callConfig,
        url: `${config.api.base}`,
    }).catch(errorHandler);
};

export {
  executeApiCall,
};