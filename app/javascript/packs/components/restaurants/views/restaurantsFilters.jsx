import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CuisinesSelect from '../../cuisines/cuisinesSelect';
import RatingSelect from '../ratingSelect';
import DeliveryTimeSelect from '../deliveryTimeSelect';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
});

class RestaurantFilters extends React.PureComponent {
    render() {
        const { classes  } = this.props;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={4}>
                    <CuisinesSelect
                        id="filters-cuisines-select"
                        onChange={this.props.cuisineChanged}
                        value={this.props.cuisine}
                    />
                </Grid>
                <Grid item xs={4}>
                    <RatingSelect
                        id="filters-rating-select"
                        onChange={this.props.minRatingChanged}
                        value={this.props.minRating}
                    />
                </Grid>
                <Grid item xs={4}>
                    <DeliveryTimeSelect
                        id="filters-delivery-time-select"
                        onChange={this.props.maxDeliveryChanged}
                        value={this.props.maxDeliveryTime}
                    />
                </Grid>
            </Grid>
        );
    }

    componentWillUnmount() {
        this.executeSearch.cancel();
    }
}

export default withStyles(styles)(RestaurantFilters);