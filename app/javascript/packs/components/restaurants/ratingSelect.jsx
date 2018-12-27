import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Star from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    field: {
        width: '100%',
        textAlign: 'start',
    },
});

const EMPTY_VAL = '';

class RatingSelect extends React.Component {
    _handleChange = (event) => {
        const val = event.target.value;
        this.props.onChange(val === EMPTY_VAL ? null : val);
    };

    render () {
        return (
            <FormControl className={this.props.classes.field}>
                <InputLabel
                    htmlFor={this.props.id}
                >
                    Rating
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
                    <MenuItem value={EMPTY_VAL}>
                        <em>All</em>
                    </MenuItem>
                    {[1, 2, 3].map((rating) => (
                        <MenuItem key={rating} value={rating}>
                            {Array.from(Array(rating)).map((val, index) => (
                                <Star key={index} fontSize="small" />
                            ))}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}

export default withStyles(styles)(RatingSelect)