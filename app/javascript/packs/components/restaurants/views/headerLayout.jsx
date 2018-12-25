import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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
        backgroundImage: 'url("/assets/weeat-bg.jpg")',
        backgroundColor: '#868686',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
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
        margin: '20px auto',
        textAlign: 'center',
    },
    bannerTitle: {
        textAlign: 'center',
        fontSize: '3em',
        lineHeight: '3',
        fontWeight: 'bold',
        margin: '40px auto',
    },
    bannerSubTitle: {
        textAlign: 'center',
        fontSize: '1.5em',
        lineHeight: '1.5',
        margin: '0 auto',
    },
});

function HeaderLayout({ classes, search, filters }) {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.bannerWrapper}>
                <div className={classes.bannerTitleWrapper}>
                    <h1 className={classes.bannerTitle}>
                        WeEat
                    </h1>
                    <p className={classes.subheader}>
                        It's 12:00 and you're hungry.
                    </p>
                </div>
                {search}
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