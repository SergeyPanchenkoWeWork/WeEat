import React from 'react';
import { connect } from 'react-redux';

import { fetchCuisines } from '../../reducers/cuisines/actions';
import {
    getCuisines,
    isLoading,
    isLoaded,
} from '../../reducers/cuisines/selectors';

class CuisinesFetcher extends React.Component {
    render() {
        return this.props.children({
            isLoading: this.props.isLoading,
            isLoaded: this.props.isLoaded,
            cuisines: this.props.cuisines,
        });
    }

    componentDidMount() {
        if (!this.props.isLoaded && !this.props.isLoading) {
            this.props.fetchCuisines();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cuisines: getCuisines(state),
        isLoading: isLoading(state),
        isLoaded: isLoaded(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCuisines: () => {
            dispatch(fetchCuisines());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CuisinesFetcher);