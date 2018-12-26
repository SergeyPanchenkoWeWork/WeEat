import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import CuisinesSelect from '../../cuisines/cuisinesSelect';
import RatingSelect from '../ratingSelect';
import DeliveryTimeSelect from '../deliveryTimeSelect';

const styles = theme => ({
    filtersWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 auto',
    },
});

class RestaurantFilters extends React.PureComponent {
    render() {
        const { classes  } = this.props;

        return (
           <div className={classes.filtersWrapper}>
                <CuisinesSelect
                    id="filters-cuisines-select"
                    onChange={this.props.cuisineChanged}
                    value={this.props.cuisine}
                />
                <RatingSelect
                    id="filters-rating-select"
                    onChange={this.props.minRatingChanged}
                    value={this.props.minRating}
                />
               <DeliveryTimeSelect
                    id="filters-delivery-time-select"
                    onChange={this.props.maxDeliveryChanged}
                    value={this.props.maxDeliveryTime}
                />
           </div>
        );
    }

    componentWillUnmount() {
        this.executeSearch.cancel();
    }
}

export default withStyles(styles)(RestaurantFilters);