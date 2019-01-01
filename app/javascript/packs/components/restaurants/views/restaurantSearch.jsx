import React from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    search: {
        color: 'white',
        width: 500,
        '&$cssFocused': {
            color: 'white',
            borderColor: 'white',
        },
    },
    searchLabel: {
        color: 'white',
        '&$cssFocused': {
            color: 'white',
        },
    },
    notchedOutline: {
        borderColor: 'white !important',
    },
    cssFocused: {
        color: 'white',
        borderColor: 'white',
    },
});

class RestaurantSearch extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            currentText: props.name,
        };

        this.executeSearch = _.debounce(props.nameChanged, 400);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.name !== state.name) {
            return {
                name: props.name,
                currentText: props.name,
            };
        }

        return null;
    }

    _handleNameChanged = (event) => {
        const newName = event.target.value;

        this.setState({
            currentText: newName,
        });

        this.executeSearch(newName);
    };

    render() {
        return (
            <TextField
                label="Search"
                value={this.state.currentText}
                onChange={this._handleNameChanged}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    classes: {
                        root: this.props.classes.searchLabel,
                        focused: this.props.classes.cssFocused,
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                    classes: {
                        root: this.props.classes.search,
                        focused: this.props.classes.cssFocused,
                        notchedOutline: this.props.classes.notchedOutline,
                    }
                }}
            />
        );
    }

    componentWillUnmount() {
        this.executeSearch.cancel();
    }
}

export default withStyles(styles)(RestaurantSearch);