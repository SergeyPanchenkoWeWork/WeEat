import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';

import withCuisines from './withCuisinesHOC';

const styles = theme => ({
    field: {
        width: '100%',
        textAlign: 'start',
    },
});

class CuisinesSelect extends React.Component {
    static defaultProps = {
        hasPlaceholder: true,
    };

    _handleChange = (event) => {
        this.props.onChange(event.target.value);
    };

    render () {
        return (
            <FormControl className={this.props.classes.field} error={this.props.error} required={this.props.required}>
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
                    {this.props.hasPlaceholder ? <MenuItem value="">
                        <em>All</em>
                    </MenuItem> : undefined }
                    {Object.keys(this.props.cuisines).map((cuisineId) => (
                        <MenuItem key={cuisineId} value={cuisineId}>
                            {this.props.cuisines[cuisineId].name}
                        </MenuItem>
                    ))}
                </Select>
                {this.props.helperText ? <FormHelperText>{this.props.helperText}</FormHelperText> : undefined}
            </FormControl>
        );
    }
}

export default withCuisines(withStyles(styles)(CuisinesSelect));