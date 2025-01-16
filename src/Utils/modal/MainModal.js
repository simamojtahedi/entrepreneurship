import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const MainModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} size={props.size && props.size}>
            <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    )
}

export default MainModal
