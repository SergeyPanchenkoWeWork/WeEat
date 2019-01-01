

const formatDeliveryTime = (time) => {
    return `${Math.round(time / (1000 * 60))} minutes`;
};

export {
    formatDeliveryTime,
};