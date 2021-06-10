import React from 'react';

import Modal from './Modal'

function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose} >
        <div className="DeleteBdgeMOdal">
            <h1>Are You Sure</h1>
            <p>You are about to delete this badge.</p>
            <div>
                <button className="btn btn-danger mr-4">Delete</button>
                <button className="btn btn-primary">Cancel</button>

            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal;