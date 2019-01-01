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
        flex: '0 0 200px',
        flexDirection: 'column',
    },
    mapWrapper: {
        display: 'flex',
        flex: '1 1 auto',
    },
});

function RestaurantsLayout({ classes, header, list, map  }) {
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
        </div>
    );
}

export default withStyles(styles)(RestaurantsLayout);