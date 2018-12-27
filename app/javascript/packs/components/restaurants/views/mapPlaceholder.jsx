import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    placeholder: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#eeeeee',
    },
});

function MapPlaceholder({ classes }) {
    return (
        <div className={classes.placeholder} />
    );
}

export default withStyles(styles)(MapPlaceholder);