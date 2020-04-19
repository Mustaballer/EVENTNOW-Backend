import React, {Component} from 'react';

import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import './Events.css';

class EventsPage extends Component {
    state = {
        creating: false
    };

    startCreateEventHandler = () => {
        this.setState({creating: true})
    }

    modalConfirmHandler = () => {
        this.setState({creating: false});
    };

    modalCancelHeader = () => {
        this.setState({creating: false});
    };

    render() {
        return (
            <React.Fragment>
                {this.state.creating && <Backdrop />}
                {this.state.creating && (
                    <Modal
                        title="Add Event"
                        canCancel
                        canConfirm
                        onCancel={this.modalCancelHeader}
                        onConfirm ={this.modalConfirmHandler}
                    >
                        <p>Modal Content</p>
                    </Modal>
                )}
                <div className="events-control">
                    <p>Share your own Cool Events!</p>
                    <button className="btn" onClick={this.startCreateEventHandler}>
                    Create Event</button>
                </div>
            </React.Fragment>
        )
    }
}

export default EventsPage;