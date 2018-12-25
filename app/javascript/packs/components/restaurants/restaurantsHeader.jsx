import React from 'react';
import HeaderLayout from './views/headerLayout'

export default class RestaurantsHeader extends React.Component {
    state = {
        minRating: null,
        cuisine: '',
        name: '',
        maxDeliveryTime: null,
    };

    _executeSearch = (state) => {
        this.props.search(state);
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
                search={<div>search</div>}
                filters={<div>filters</div>}
            />
        );
    }
}