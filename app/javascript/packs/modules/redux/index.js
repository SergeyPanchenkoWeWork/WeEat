import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const init = (rootReducer) => {
    const store = createStore(
        rootReducer,
        {},
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
};

const createReducer = (executionMap, initState = {}) => {
    return (state, action) => {
        if (typeof executionMap[action.type] === 'function') {
            return executionMap[action.type](state, action);
        }

        return initState;
    };
};

export {
    init,
    createReducer,
};