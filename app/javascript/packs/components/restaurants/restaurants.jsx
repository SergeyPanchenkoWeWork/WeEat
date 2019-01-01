import React from 'react';
import { connect } from 'react-redux';

import { searchRestaurants } from '../../reducers/restaurants/actions';
import {
    getRestaurants,
    isLoading,
    isLoaded,
    hasUpdated,
} from '../../reducers/restaurants/selectors';

import RestaurantsLayout from './views/restaurantsLayout';
import ListNullstate from './views/listNullstate';
import ListLoading from './views/listLoading';
import RestaurantsHeader from './restaurantsHeader';
import RestaurantsList from './restaurantsList';
import RestaurantsMap from '../maps/restaurantsMap';
import CreateRestaurantModal from '../createRestaurant/createRestaurantModal';
import CreateReviewModal from '../createReview/createReviewModal';

class Restaurants extends React.Component {
    state = {
        selectedRestaurant: '',
        hasCreateRestaurantModal: false,
        hasCreateReviewModal: false,
        reviewForRestaurant: null,
    };

    _selectRestaurant = (restaurantId) => {
        this.setState({
            selectedRestaurant: restaurantId,
        });
    };

    _openRestaurantModal = () => {
        this.setState({
            hasCreateRestaurantModal: true,
        });
    };

    _closeRestaurantModal = () => {
        this.setState({
            hasCreateRestaurantModal: false,
        });
    };

    _openReviewModal = (restaurant) => {
        this.setState({
            hasCreateReviewModal: true,
            reviewForRestaurant: restaurant,
        });
    };

    _closeReviewModal = () => {
        this.setState({
            hasCreateReviewModal: false,
            reviewForRestaurant: null,
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
                    openReviewModal={this._openReviewModal}
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
            <RestaurantsHeader
                search={this.props.search}
                openCreateModal={this._openRestaurantModal}
                hasUpdated={this.props.hasUpdated}
            />
        );
    }

    render() {
        return (
            <RestaurantsLayout
                header={this.renderHeader()}
                map={this.renderMap()}
                list={this.renderList()}
            >
                {this.state.hasCreateRestaurantModal ? <CreateRestaurantModal close={this._closeRestaurantModal} />: undefined}
                {this.state.hasCreateReviewModal ? <CreateReviewModal close={this._closeReviewModal} restaurant={this.state.reviewForRestaurant} />: undefined}
            </RestaurantsLayout>
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
        hasUpdated: hasUpdated(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (filters = {}, { isInBackground = false, isForced = false } = {}) => {
            dispatch(searchRestaurants(filters, { isInBackground, isForced }));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);