import React from 'react';
import HeaderLayout from './views/headerLayout'
import RestaurantSearch from './views/restaurantSearch'
import RestaurantFilters from './views/restaurantsFilters'

export default class RestaurantsHeader extends React.Component {
    state = {
        minRating: null,
        cuisine: '',
        name: '',
        maxDeliveryTime: null,
    };

    _executeSearch = () => {
        this.props.search(this.state, true);
    };

    _updateName = (newName) => {
        this.setState({
            name: newName,
        }, this._executeSearch);
    };

    _updateCuisine = (cuisine) => {
        this.setState({
            cuisine,
        }, this._executeSearch);
    };

    _updateMinRating = (minRating) => {
        this.setState({
            minRating,
        }, this._executeSearch);
    };

    _updateMaxDeliveryTime = (maxDeliveryTime) => {
        this.setState({
            maxDeliveryTime,
        }, this._executeSearch);
    };

    render() {
        return (
            <HeaderLayout
                search={<RestaurantSearch name={this.state.name} nameChanged={this._updateName}/>}
                filters={<RestaurantFilters
                    cuisine={this.state.cuisine}
                    cuisineChanged={this._updateCuisine}
                    minRating={this.state.minRating}
                    minRatingChanged={this._updateMinRating}
                    maxDeliveryTime={this.state.maxDeliveryTime}
                    maxDeliveryChanged={this._updateMaxDeliveryTime}
                />}
            />
        );
    }
}