import { createReview as createReviewApi } from '../../api/reviews';
import { hash } from '../../modules/hash';

const ACTIONS_NAME = {
    CREATE_REVIEW_CLEAR: 'review-create-clear',
    CREATE_REVIEW_STARTED: 'review-create-started',
    CREATE_REVIEW_DONE: 'review-create-done',
    CREATE_REVIEW_FAILED: 'review-create-failed',
};

const createReviewStarted = (paramsHash) => ({
    type: ACTIONS_NAME.CREATE_REVIEW_STARTED,
    paramsHash,
});

const createReviewFailed = (paramsHash) => ({
    type: ACTIONS_NAME.CREATE_REVIEW_FAILED,
    paramsHash,
});

const createReviewDone = (paramsHash) => ({
    type: ACTIONS_NAME.CREATE_REVIEW_DONE,
    paramsHash,
});

const createReview = (params) => {
    return (dispatch) => {
        const paramsHash = hash(params);
        dispatch(createReviewStarted(paramsHash));

        createReviewApi(params)
        .then((review) => dispatch(createReviewDone(paramsHash)))
        .catch(() => dispatch(createReviewFailed(paramsHash)));
    }
};

const clearData = () => {
    return {
        type: ACTIONS_NAME.CREATE_REVIEW_CLEAR,
    };
};

export {
    ACTIONS_NAME,
    createReview,
    clearData,
};