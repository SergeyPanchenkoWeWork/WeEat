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
import ListLoading from './views/listLoading';
import RestaurantsHeader from './restaurantsHeader';
import RestaurantsList from './restaurantsList';

class Restaurants extends React.Component {
    renderList() {
        if (!this.props.isLoaded) {
            return (
                <ListLoading />
            );
        } else if (this.props.restaurants.length > 0) {
            return (
                <RestaurantsList restaurants={this.props.restaurants} />
            );
        } else {
            return (
                <ListNullstate />
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
        this.props.search();
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
        search: (filters = {}, isInBackground = false) => {
            dispatch(searchRestaurants(filters, isInBackground));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);