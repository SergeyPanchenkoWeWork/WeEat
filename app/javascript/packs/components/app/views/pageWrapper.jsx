import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    outerWrapper: {
        margin: 0,
        padding: 0,
        fontSize: '16px',
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        textAlign: 'center',
        fontFamily: 'roboto',
        minHeight: '100vh',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
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