import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withSnackbar } from 'notistack';

import { isLoaded, isLoading} from '../../reducers/createRestaurant/selectors';
import { clearData, createRestaurant } from '../../reducers/createRestaurant/actions';
import { restaurantsUpdated } from '../../reducers/restaurants/actions';
import { validate, hasError } from '../../modules/validation';
import { requiredValidation } from '../../modules/validation/validations';

import DeliveryTimeSelect from '../restaurants/deliveryTimeSelect';
import CuisinesSelect from '../cuisines/cuisinesSelect';

const validationMap = {
    name: requiredValidation,
    cuisine: requiredValidation,
    max_delivery_time: requiredValidation,
    address_lat: requiredValidation,
    address_lng: requiredValidation,
    address_name: requiredValidation,
};

class CreateRestaurantForm extends React.PureComponent {
    state = {
        values: {
            name: '',
            cuisine: '',
            max_delivery_time: null,
            accept_10_bis: true,
            address_lat: '',
            address_lng: '',
            address_name: '',
        },
        errors: {

        },
    };

    _submitForm = (params) => {
        this.props.createRestaurant(params);
    };

    _handleSubmit = () => {
        const errors = validate(validationMap, this.state.values);

        this.setState({
            errors,
        }, () => {
            if (!hasError(errors)) {
                this._submitForm(this.state.values)
            }
        })
    };

    _getHandleChange = (key) => {
        return (e) => {
            const value = e.target.value;

            this.setState((state) => {
                return {
                    values: {
                        ...state.values,
                        [key]: value,
                    },
                };
            });
        };
    };

    _getHandleCheckboxChange = (key) => {
        return (e) => {
            const value = e.target.checked;

            this.setState((state) => {
                return {
                    values: {
                        ...state.values,
                        [key]: value,
                    },
                };
            });
        };
    };

    _getHandleSelectChange = (key) => {
        return (newVal) => {
            this.setState((state) => {
                return {
                    values: {
                        ...state.values,
                        [key]: newVal,
                    },
                };
            });
        };
    };

    render() {
        return (
            <form noValidate autoComplete="off" onSubmit={this._handleSubmit}>
                <FormGroup>
                <TextField
                    label="Name"
                    value={this.state.values.name}
                    onChange={this._getHandleChange('name')}
                    helperText={this.state.errors.name}
                    error={this.state.errors.name ? true : false}
                    required
                />
                </FormGroup>
                <FormGroup>
                <CuisinesSelect
                    id="restaurant-create-cuisines-select"
                    onChange={this._getHandleSelectChange('cuisine')}
                    value={this.state.values.cuisine}
                    helperText={this.state.errors.cuisine}
                    error={this.state.errors.cuisine ? true : false}
                    required
                    hasPlaceholder={false}
                />
                </FormGroup>
                <FormGroup>
                    <DeliveryTimeSelect
                        id="restaurant-create-delivery-time-select"
                        onChange={this._getHandleSelectChange('max_delivery_time')}
                        value={this.state.values.max_delivery_time}
                        helperText={this.state.errors.max_delivery_time}
                        error={this.state.errors.max_delivery_time ? true : false}
                        required
                        hasPlaceholder={false}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        label="Address"
                        value={this.state.values.address_name}
                        onChange={this._getHandleChange('address_name')}
                        helperText={this.state.errors.address_name}
                        error={this.state.errors.address_name ? true : false}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        label="Address Latitude"
                        value={this.state.values.address_lat}
                        onChange={this._getHandleChange('address_lat')}
                        helperText={this.state.errors.address_lat}
                        error={this.state.errors.address_lat ? true : false}
                        InputProps={{
                            type: 'number'
                        }}
                        required
                    />
                    <TextField
                        label="Address Longitude"
                        value={this.state.values.address_lng}
                        onChange={this._getHandleChange('address_lng')}
                        helperText={this.state.errors.address_lng}
                        error={this.state.errors.address_lng ? true : false}
                        InputProps={{
                            type: 'number'
                        }}
                        required
                    />
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.values.accept_10_bis}
                                onChange={this._getHandleCheckboxChange('accept_10_bis')}
                                value="accept_10_bis"
                                color="primary"
                            />
                        }
                        label="Accept 10Bis"
                    />
                </FormGroup>
                <FormGroup row>
                    <Button onClick={this._handleSubmit} color="primary" variant="contained" disabled={this.props.isLoading}>
                        Save
                    </Button>
                </FormGroup>
            </form>
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.isLoaded && this.props.isLoaded !== prevProps.isLoaded) {
            this.props.restaurantsUpdated();
            this.props.enqueueSnackbar('New restaurant is ready for order!!', { variant: 'success' });
            this.props.closeModal();
        }
    }

    componentWillUnmount() {
        this.props.clearData();
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: isLoading(state),
        isLoaded: isLoaded(state),
    };
};

const mapDispatchToProps = {
    clearData: clearData,
    createRestaurant: createRestaurant,
    restaurantsUpdated: restaurantsUpdated,
};

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(CreateRestaurantForm));