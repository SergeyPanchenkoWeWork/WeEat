import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const EMPTY_VAL = -1;

export default class RatingSelect extends React.Component {
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
                    Rating
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
                    {[1, 2, 3].map((rating) => (
                        <MenuItem key={rating} value={rating}>
                            {rating}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}