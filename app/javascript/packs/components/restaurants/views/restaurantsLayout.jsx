import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Container from '../../base/container';

const styles = theme => ({
    restaurantsWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        textAlign: 'center',
    },
    mainSectionWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'row',
    },
    listWrapper: {
        display: 'flex',
        flex: '0 0',
        flexBasis: `calc(33% + ${theme.spacing.unit}px)`,
        flexDirection: 'column',
        padding: `${theme.spacing.unit * 2}px 0`,
    },
    mapWrapper: {
        display: 'flex',
        flex: '1 1 auto',
    },
});

function RestaurantsLayout({ classes, header, list, map, children  }) {
    return (
        <div className={classes.restaurantsWrapper}>
            {header}
            <Container className={classes.mainSectionWrapper}>
                <div className={classes.listWrapper}>
                    {list}
                </div>
                <div className={classes.mapWrapper}>
                    {map}
                </div>
            </Container>
            {children}
        </div>
    );
}

export default withStyles(styles)(RestaurantsLayout);