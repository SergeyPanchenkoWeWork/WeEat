import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footerWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.dark,
        color: 'white',
        padding: `${theme.spacing.unit * 3}px 0`,
        textTransform: 'uppercase',
        fontSize: '0.925em',
    },
    heart: {
        margin: `0 ${theme.spacing.unit}px`,
        fontSize: '1.8em',
        lineHeight: '0.7',
    },
});

function Footer({ classes }) {
    return (
        <div className={classes.footerWrapper}>
            Crafted with <em className={classes.heart}> ❤ </em>Sergey Panchenko
        </div>
    );
}

export default withStyles(styles)(Footer);