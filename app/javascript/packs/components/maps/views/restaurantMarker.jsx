import React from 'react';
import classnames from 'classnames';
import Location from '@material-ui/icons/LocationOn';
import { withStyles } from '@material-ui/core/styles';

const K_WIDTH = 60;
const K_HEIGHT = 60;

const styles = theme => ({
    marker: {
        position: 'absolute',
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,
        color: theme.palette.primary.main,

        '&.selected': {
            color: theme.palette.secondary.main,
        },
    },
});

function RestaurantMarker({ classes, restaurant, isSelected, ...props }) {
    return (
        <Location key="marker" className={classnames(classes.marker, { selected: isSelected })}/>
    );
}

export default withStyles(styles)(RestaurantMarker);