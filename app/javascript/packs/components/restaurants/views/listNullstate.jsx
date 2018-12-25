import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Container from '../../base/container';

const styles = theme => ({
    nullstateText: {
        display: 'flex',
        flex: '1 1 auto',
        textAlign: 'center',
        color: '#c3c3c3',
        fontSize: '1.25em',
        fontWeight: 'bolder',
    },
});

function ListNullstate({ classes}) {
    return (
        <div className={classes.nullstateText}>
            No Restaurants Found.
        </div>
    );
}

export default withStyles(styles)(ListNullstate);