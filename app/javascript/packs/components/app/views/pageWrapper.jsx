import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    outerWrapper: {
        margin: 0,
        padding: 0,
        fontSize: '16px',
    },
});

function pageWrapper({ classes, children }) {
    return (
        <div className={classes.outerWrapper}>
            { children }
        </div>
    );
}

export default withStyles(styles)(pageWrapper);