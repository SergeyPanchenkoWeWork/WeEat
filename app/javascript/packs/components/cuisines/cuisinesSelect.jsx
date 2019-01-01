import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import withCuisines from './withCuisinesHOC';

class CuisinesSelect extends React.Component {
    _handleChange = (event) => {
        this.props.onChange(event.target.value);
    };

    render () {
        return (
            <FormControl variant="outlined">
                <InputLabel
                    htmlFor={this.props.id}
                >
                    Cuisine
                </InputLabel>
                <Select
                    value={this.props.value}
                    onChange={this._handleChange}
                    input={
                        <OutlinedInput
                            labelWidth={120}
                            id={this.props.id}
                        />
                    }
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    {Object.keys(this.props.cuisines).map((cuisineId) => (
                        <MenuItem key={cuisineId} value={cuisineId}>
                            {this.props.cuisines[cuisineId].name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}

export default withCuisines(CuisinesSelect);