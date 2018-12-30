
const validateValue = (validations, value) => {
    if (typeof validations === 'function') {
        return validations(value);
    }

    if (Array.isArray(validations)) {
        return validations
            .map((validation) => validation(value))
            .filter((error) => !!error)[0]
    }
};

const validate = (validationMap, values) => {
    return Object.keys(values).reduce((errors, key) => {
        const error = validateValue(validationMap[key], values[key]);
        if (error) {
            errors[key] = error;
        }

        return errors;
    }, {});
};

const hasError = (errors) => {
   return Object.keys(errors).length > 0;
};

export {
    validate,
    hasError,
};