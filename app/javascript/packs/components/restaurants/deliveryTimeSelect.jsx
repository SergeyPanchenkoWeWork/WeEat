import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { formatDeliveryTime } from '../../modules/formatters/restaurants';

const EMPTY_VAL = -1;
const DELIVERY_TIME = [
    30 * 60 * 1000,
    60 * 60 * 1000,
    90 * 60 * 1000,
    120 * 60 * 1000,
];

export default class DeliveryTimeSelect extends React.Component {
    _handleChange = (event) => {
        const val = event.target.value;
        this.props.onChange(val === EMPTY_VAL ? null : val);
    };

    render () {
        return (
            <FormControl variant="outlined">
                <InputLabel
                    htmlFor={this.props.id}
                >
                    Speed
                </InputLabel>
                <Select
                    value={this.props.value === null ? EMPTY_VAL : this.props.value }
                    onChange={this._handleChange}
                    input={
                        <OutlinedInput
                            labelWidth={120}
                            id={this.props.id}
                        />
                    }
                >
                    <MenuItem value={-1}>
                        <em>All</em>
                    </MenuItem>
                    {DELIVERY_TIME.map((speed) => (
                        <MenuItem key={speed} value={speed}>
                            {formatDeliveryTime(speed)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}