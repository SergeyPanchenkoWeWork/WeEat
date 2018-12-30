import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import { withStyles } from '@material-ui/core/styles';

import { formatDeliveryTime } from '../../modules/formatters/restaurants';

const EMPTY_VAL = '';
const DELIVERY_TIME_MS = [
    30 * 60 * 1000,
    60 * 60 * 1000,
    90 * 60 * 1000,
    120 * 60 * 1000,
];

const styles = theme => ({
    field: {
        width: '100%',
        textAlign: 'start',
    },
});

class DeliveryTimeSelect extends React.Component {
    static defaultProps = {
        hasPlaceholder: true,
    };

    _handleChange = (event) => {
        const val = event.target.value;
        this.props.onChange(val === EMPTY_VAL ? null : val);
    };

    render () {
        return (
            <FormControl className={this.props.classes.field} error={this.props.error} required={this.props.required}>
                <InputLabel
                    htmlFor={this.props.id}
                >
                    Speed
                </InputLabel>
                <Select
                    value={this.props.value === null ? EMPTY_VAL : this.props.value }
                    onChange={this._handleChange}
                    input={
                        <Input
                            id={this.props.id}
                        />
                    }
                >
                    {this.props.hasPlaceholder ? <MenuItem value={EMPTY_VAL}>
                        <em>All</em>
                    </MenuItem> : undefined }
                    {DELIVERY_TIME_MS.map((speed) => (
                        <MenuItem key={speed} value={speed}>
                            {formatDeliveryTime(speed)}
                        </MenuItem>
                    ))}
                    {this.props.helperText ? <FormHelperText>{this.props.helperText}</FormHelperText> : undefined}
                </Select>
            </FormControl>
        );
    }
}

export default withStyles(styles)(DeliveryTimeSelect)