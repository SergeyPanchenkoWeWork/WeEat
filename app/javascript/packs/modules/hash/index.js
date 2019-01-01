import objectHash from 'object-hash';

const EMPTY_HASH = '';

const hash = (obj) => {
    return objectHash(obj, {
        algorithm: 'md5',
        respectFunctionProperties: false,
        ignoreUnknown: true,
        respectType: false,
        unorderedObjects: true,
    });
};

export {
    EMPTY_HASH,
    hash,
};