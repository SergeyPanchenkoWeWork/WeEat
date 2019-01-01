import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    mapWrapper: {
        width: '100%',
        height: '100%',
        flex: '1 1 auto',
        backgroundColor: '#eeeeee',
    },
});

function MapWrapper({ classes, ...props }) {
    return (
        <div className={classes.mapWrapper} {...props} />
    );
}

export default withStyles(styles)(MapWrapper);