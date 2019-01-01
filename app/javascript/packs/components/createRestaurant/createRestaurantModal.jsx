import React from 'react';
import Modal from '../base/modal';
import CreateRestaurantForm from './createRestaurantForm';

export default class CreateRestaurantModal extends React.PureComponent {
    render() {
        return (
            <Modal
                close={this.props.close}
                title="New Restaurant"
                >
                <CreateRestaurantForm closeModal={this.props.close} />
            </Modal>
        );
    }
}