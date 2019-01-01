import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapWrapper from './views/mapWrapper';
import RestaurantMarker from './views/restaurantMarker';
import config from '../../config';

export default class RestaurantsMap extends React.PureComponent {
    _onRestaurantClick = (key, childProps) => {
        if (childProps.restaurant.id !== this.props.selected) {
            this.props.selectRestaurant(childProps.restaurant.id);
        }
    };

    render() {
        return (
            <MapWrapper>
                <GoogleMapReact
                    bootstrapURLKeys={{key: config.map.apiKey}}
                    defaultCenter={config.map.center}
                    defaultZoom={config.map.zoom}
                    onChildClick={this._onRestaurantClick}
                >
                    {this.props.restaurants.map((restaurant) => (
                        <RestaurantMarker
                            key={restaurant.id}
                            lat={restaurant.address_lat}
                            lng={restaurant.address_lng}
                            restaurant={restaurant}
                            isSelected={restaurant.id === this.props.selected}
                        />
                    ))}
                </GoogleMapReact>
            </MapWrapper>
        );
    }
}
