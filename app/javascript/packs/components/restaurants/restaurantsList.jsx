import React from 'react';

import Restaurant from './views/restaurant';

export default class RestaurantsList extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                {this.props.restaurants.map((restaurant) => (
                    <Restaurant
                        key={restaurant.id}
                        restaurant={restaurant}
                    />
                ))}
            </React.Fragment>
        );
    }
}