import React from 'react';
import classnames from 'classnames';
import MaterialFormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    formGroup: {
        margin: `${theme.spacing.unit}px 0`
    },
    extraPadding: {
        padding: `${theme.spacing.unit * 2}px 0`
    },
    noWrap: {
        flexWrap: 'nowrap',
    }
});

function FormGroup({ classes, extraPadding = false, row = false, ...props}) {
    return (
        <MaterialFormGroup
            className={classnames(classes.formGroup, {
                [classes.extraPadding]: extraPadding,
                [classes.noWrap]: row,
            })}
            row={row}
            {...props}
        />
    )
}
export default withStyles(styles)(FormGroup);