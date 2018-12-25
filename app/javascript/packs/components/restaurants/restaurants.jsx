import React from 'react';
import { connect } from 'react-redux';

import { searchRestaurants } from '../../reducers/restaurants/actions';
import {
    getRestaurants,
    isLoading,
    isLoaded,
} from '../../reducers/restaurants/selectors';

import RestaurantsLayout from './views/restaurantsLayout';
import MapPlaceholder from './views/mapPlaceholder';
import ListNullstate from './views/listNullstate';
import RestaurantsHeader from './restaurantsHeader';

class Restaurants extends React.Component {
    renderList() {
        if (this.props.restaurants.length > 0) {
            return (
                <ListNullstate />
            );
        } else {
            return (
                <ListNullstate/>
            );
        }
    }

    renderMap() {
        return (
            <MapPlaceholder/>
        );
    }

    renderHeader() {
        return (
            <RestaurantsHeader search={this.props.search} />
        );
    }

    render() {
        return (
            <RestaurantsLayout
                header={this.renderHeader()}
                map={this.renderMap()}
                list={this.renderList()}
            />
        );
    }

    componentDidMount() {
        this.props.search({});
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: getRestaurants(state),
        isLoading: isLoading(state),
        isLoaded: isLoaded(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (filters) => {
            dispatch(searchRestaurants(filters));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);