import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

import withCuisines from './withCuisinesHOC';

const styles = theme => ({
    field: {
        width: '100%',
        textAlign: 'start',
    },
});

class CuisinesSelect extends React.Component {
    _handleChange = (event) => {
        this.props.onChange(event.target.value);
    };

    render () {
        return (
            <FormControl className={this.props.classes.field}>
                <InputLabel
                    htmlFor={this.props.id}
                >
                    Cuisine
                </InputLabel>
                <Select
                    value={this.props.value}
                    onChange={this._handleChange}
                    input={
                        <Input
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

export default withCuisines(withStyles(styles)(CuisinesSelect));