import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './style.scss'

const EconomicalPackInfo = (props) => {

    return (
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
            <Modal.Title>خرید بسته ویژه اقتصادی </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
             بسته ویژه اقتصادی با تعداد {props.persons} نفر و به مدت {props.packageHour} ساعت برای یک ماه با قیمت {((props.persons * props.packageHour) * 300).toLocaleString()} تومان خریداری شود ؟
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
                بستن
            </Button>
            <Button variant="success" onClick={props.close}>
                خرید
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EconomicalPackInfo