import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';

import { isLoaded, isLoading} from '../../reducers/createReview/selectors';
import { clearData, createReview } from '../../reducers/createReview/actions';
import { restaurantsUpdated } from '../../reducers/restaurants/actions';
import { validate, hasError } from '../../modules/validation';
import { requiredValidation } from '../../modules/validation/validations';

import RatingSelect from '../restaurants/ratingSelect';

const validationMap = {
    user_name: requiredValidation,
    rating: requiredValidation,
};

class CreateReviewForm extends React.PureComponent {
    state = {
        values: {
            user_name: '',
            rating: null,
            message: '',
        },
        errors: {

        },
    };

    _submitForm = (params) => {
        this.props.createReview(params);
    };

    _handleSubmit = () => {
        const errors = validate(validationMap, this.state.values);

        this.setState({
            errors,
        }, () => {
            if (!hasError(errors)) {
                this._submitForm({
                    ...this.state.values,
                    restaurant: this.props.restaurant.id,
                });
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
                        label="Username"
                        value={this.state.values.user_name}
                        onChange={this._getHandleChange('user_name')}
                        helperText={this.state.errors.user_name}
                        error={this.state.errors.user_name ? true : false}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <RatingSelect
                        id="review-create-rating-select"
                        onChange={this._getHandleSelectChange('rating')}
                        value={this.state.values.rating}
                        helperText={this.state.errors.rating}
                        error={this.state.errors.rating ? true : false}
                        required
                        hasPlaceholder={false}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        label="Message"
                        value={this.state.values.message}
                        multiline
                        rowsMax="4"
                        onChange={this._getHandleChange('message')}
                        helperText={this.state.errors.message}
                        error={this.state.errors.message ? true : false}
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
    createReview: createReview,
    restaurantsUpdated: restaurantsUpdated,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);