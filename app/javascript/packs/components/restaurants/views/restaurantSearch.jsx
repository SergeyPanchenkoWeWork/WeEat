import React from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    search: {
        color: 'white',
    }
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
                label="Name"
                value={this.state.currentText}
                onChange={this._handleNameChanged}
                margin="normal"
                variant="outlined"
                className={this.props.classes.white}
            />
        );
    }

    componentWillUnmount() {
        this.executeSearch.cancel();
    }
}

export default withStyles(styles)(RestaurantSearch);