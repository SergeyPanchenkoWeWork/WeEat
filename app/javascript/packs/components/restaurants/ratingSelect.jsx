import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
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
                    {this.props.hasPlaceholder ? <MenuItem value={EMPTY_VAL}>
                        <em>All</em>
                    </MenuItem> : undefined }
                    {[1, 2, 3].map((rating) => (
                        <MenuItem key={rating} value={rating}>
                            {Array.from(Array(rating)).map((val, index) => (
                                <Star key={index} fontSize="small" />
                            ))}
                        </MenuItem>
                    ))}
                </Select>
                {this.props.helperText ? <FormHelperText>{this.props.helperText}</FormHelperText> : undefined}
            </FormControl>
        );
    }
}

export default withStyles(styles)(RatingSelect)