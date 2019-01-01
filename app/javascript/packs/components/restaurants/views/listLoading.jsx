import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    loading: {
        display: 'flex',
        flex: '1 1 auto',
        textAlign: 'center',
        color: '#c3c3c3',
        fontSize: '1.25em',
        fontWeight: 'bolder',
    },
});

function ListLoading({ classes}) {
    return (
        <div className={classes.loading}>
            Loading...
        </div>
    );
}

export default withStyles(styles)(ListLoading);