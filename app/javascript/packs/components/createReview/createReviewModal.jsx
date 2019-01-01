import React from 'react';
import Modal from '../base/modal';
import CreatReviewForm from './creatReviewForm';

export default class CreatReviewModal extends React.PureComponent {
    render() {
        return (
            <Modal
                close={this.props.close}
                title={`Review ${this.props.restaurant.name}`}
            >
                <CreatReviewForm closeModal={this.props.close} restaurant={this.props.restaurant}/>
            </Modal>
        );
    }
}