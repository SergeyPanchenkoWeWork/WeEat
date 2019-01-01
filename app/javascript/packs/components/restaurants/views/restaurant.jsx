import React from 'react';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/Star';
import CreditCard from '@material-ui/icons/CreditCard';
import AddIconfrom from '@material-ui/icons/AddCircleOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import CuisineIcon from '../../cuisines/cuisineIcon';


const styles = theme => ({
    card: {
        display: 'flex',
        margin: `${theme.spacing.unit}px`,
        '&.selected': {
            backgroundColor: '#f3f3f3',
        },
    },
    cardContent: {
        display: 'flex',
        flex: '1 1 auto',
        cursor: 'pointer',
    },
    name: {
        lineHeight: 1,
        marginRight: theme.spacing.unit,
    },
    infoWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    infoTitleWrapper: {
        display: 'flex',
    },
    ratingWrapper: {
        display: 'flex',
    },
    ratingTitle: {
        marginRight: `${theme.spacing.unit}px`,
        lineHeight: 1.8,
    },
    iconCuisine: {
        fontSize: '72px',
        margin: `auto ${theme.spacing.unit * 2}px`,
    },
    addButton: {
        margin: `auto ${theme.spacing.unit}px`,
    },
});

const _getRestaurantRatingAsArray = (rating) => {
    return Array.from(Array(Math.floor(rating)));
};

class Restaurant extends React.PureComponent {
    _onCardClick = () => {
        this.props.onRestaurantClick(this.props.restaurant.id);
    };

    _handleAddClick = () => {
       this.props.openReviewModal(this.props.restaurant);
    };

    render() {
        const { classes, restaurant, isSelected } = this.props;

        return (
            <Card className={classnames(classes.card, {
                selected: isSelected,
            })}>
                <CardContent className={classes.cardContent} onClick={this._onCardClick}>
                    <CuisineIcon cuisine={restaurant.cuisine_id} className={classes.iconCuisine}/>
                    <div className={classes.infoWrapper}>
                        <div className={classes.infoTitleWrapper}>
                            <Typography variant="h5" component="h4" className={classes.name}>
                                {restaurant.name}
                            </Typography>
                            {restaurant.accept_10_bis ? <CreditCard color="primary"/> : undefined}
                        </div>
                        <div className={classes.ratingWrapper}>
                            <Typography variant="caption" component="span" className={classes.ratingTitle}>
                                Rating:
                            </Typography>
                            {_getRestaurantRatingAsArray(restaurant.rating).map((val, index) => (
                                <Star key={index} fontSize="small" color="action"/>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <IconButton color="primary" onClick={this._handleAddClick} className={classes.addButton} >
                    <AddIconfrom fontSize="large" />
                </IconButton>
            </Card>
        );
    }
}

export default withStyles(styles)(Restaurant);