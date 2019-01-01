import axios from 'axios';

import config from '../config';

const errorHandler = (e) => {
   console.log(e);
   return Promise.reject(e);
};

const _getResponseData = (res) => {
    return res.data;
};

const _getData = (resData) => {
    return resData.data;
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
        url: `${config.api.base}/${path}`,
    })
    .then(_getResponseData)
    .then(_getData)
    .catch(errorHandler);
};

export {
  executeApiCall,
};