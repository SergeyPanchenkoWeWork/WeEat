import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        margin: '0 auto',
        padding: 0,
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        maxWidth: '1100px',
        width: '100%',
    },
});

function Container({ classes, className, ...props }) {
    return (
        <div className={classnames(classes.container, className)} {...props} />
    );
}

export default withStyles(styles)(Container);