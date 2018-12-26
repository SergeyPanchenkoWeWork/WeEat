import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        width: '300px',
    }
});

function Restaurant({ classes, restaurant }) {
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h4">
                    {restaurant.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(Restaurant);