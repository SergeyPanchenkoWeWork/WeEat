import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '../../base/container';

const styles = theme => ({
    headerWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
    },
    bannerWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        backgroundImage: 'linear-gradient(0deg, rgba(103, 103, 103, 0.2), rgba(0, 0, 0, 0.3)), url(/assets/weeat-bg.jpg)',
        backgroundColor: '#868686',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        padding: `${theme.spacing.unit * 4}px 0`,
    },
    filtersWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        backgroundColor: 'red',
    },
    filtersInnerWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'row',
    },
    bannerTitleWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        margin: `${theme.spacing.unit * 2}px auto`,
        textAlign: 'center',
    },
    bannerTitle: {
        textAlign: 'center',
        margin: `${theme.spacing.unit * 2}px auto`,
        color: 'white',
        fontWeight: 400,
    },
    bannerSubTitle: {
        textAlign: 'center',
        fontSize: '1.5em',
        margin: '0 auto',
        color: 'white',
    },
});

function HeaderLayout({ classes, search, filters }) {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.bannerWrapper}>
                <div className={classes.bannerTitleWrapper}>
                    <Typography variant="h1" className={classes.bannerTitle}>
                        WeEat
                    </Typography>
                    <Typography variant="h3" component="p" className={classes.bannerSubTitle}>
                        It's 12:00 and you're hungry.
                    </Typography>
                </div>
                <Container>
                    {search}
                </Container>
            </div>
            <div className={classes.filtersWrapper}>
                <Container className={classes.filtersInnerWrapper}>
                    {filters}
                </Container>
            </div>
        </div>
    );
}

export default withStyles(styles)(HeaderLayout);