
const requiredValidation = (value, errorMsg = 'Required') => {
    if (!value) {
        return errorMsg;
    }
};

export {
    requiredValidation,
};