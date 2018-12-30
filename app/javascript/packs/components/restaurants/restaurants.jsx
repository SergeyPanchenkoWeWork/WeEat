import React from 'react';
import { connect } from 'react-redux';

import { searchRestaurants } from '../../reducers/restaurants/actions';
import {
    getRestaurants,
    isLoading,
    isLoaded,
} from '../../reducers/restaurants/selectors';

import RestaurantsLayout from './views/restaurantsLayout';
import ListNullstate from './views/listNullstate';
import ListLoading from './views/listLoading';
import RestaurantsHeader from './restaurantsHeader';
import RestaurantsList from './restaurantsList';
import RestaurantsMap from '../maps/restaurantsMap';

class Restaurants extends React.Component {
    state = {
        selectedRestaurant: '',
    };

    _selectRestaurant = (restaurantId) => {
        this.setState({
            selectedRestaurant: restaurantId,
        });
    };

    renderList() {
        if (!this.props.isLoaded) {
            return (
                <ListLoading />
            );
        }

        if (this.props.restaurants.length > 0) {
            return (
                <RestaurantsList
                    restaurants={this.props.restaurants}
                    selected={this.state.selectedRestaurant}
                    selectRestaurant={this._selectRestaurant}
                />
            );
        }

        return (
            <ListNullstate />
        );
    }

    renderMap() {
        return (
            <RestaurantsMap
                restaurants={this.props.restaurants}
                selected={this.state.selectedRestaurant}
                selectRestaurant={this._selectRestaurant}
            />
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