import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/Star';
import CreditCard from '@material-ui/icons/CreditCard';
import { withStyles } from '@material-ui/core/styles';

import CuisineIcon from '../../cuisines/cuisineIcon';


const styles = theme => ({
    card: {
        display: 'flex',
        margin: `${theme.spacing.unit}px`,
    },
    cardContent: {
        display: 'flex',
        flex: '1 1 auto',
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
});

function Restaurant({ classes, restaurant }) {
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <CuisineIcon cuisine={restaurant.cuisine_id} className={classes.iconCuisine}/>
                <div className={classes.infoWrapper}>
                    <div className={classes.infoTitleWrapper}>
                        <Typography variant="h5" component="h4" className={classes.name}>
                            {restaurant.name}
                        </Typography>
                        {restaurant.accept_10_bis ? <CreditCard color="primary" />: undefined}
                    </div>
                    <div className={classes.ratingWrapper}>
                        <Typography variant="caption" component="span" className={classes.ratingTitle}>
                            Rating:
                        </Typography>
                        {Array.from(Array(Math.floor(restaurant.rating))).map((val, index) => (
                            <Star key={index} fontSize="small" color="action" />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(Restaurant);