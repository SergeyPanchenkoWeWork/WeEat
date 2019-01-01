
const normalizeArrayData = (arrayData) => {
    return arrayData.reduce((objData, elem) => {
        objData[elem.id] = elem;
        return objData;
    }, {})
};

export {
    normalizeArrayData,
};