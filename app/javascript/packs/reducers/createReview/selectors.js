import { createSelector } from 'reselect';
import { REQUEST_STATUS } from '../../modules/enum';

const getCreateReviewStore = (state) => state.createReview;

const isLoading = createSelector(
    [ getCreateReviewStore ],
    (createReviewState) => createReviewState.status === REQUEST_STATUS.LOADING
);

const isLoaded = createSelector(
    [ getCreateReviewStore ],
    (createReviewState) => createReviewState.status === REQUEST_STATUS.DONE,
);

export {
    isLoading,
    isLoaded,
};