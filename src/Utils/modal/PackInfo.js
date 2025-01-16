import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './style.scss'

const PackInfo = (props) => {
    const [date, setDate] = useState('')

    useEffect(() => {
        if (props.price === 'oneYearDiscount') {
            setDate('یک سال')
        } else if (props.price === 'sixMonthDiscount')
        {
            setDate('شش ماه')
        } else if (props.price === 'threeMonthDiscount')
        {
            setDate('سه ماه')
        } else {
            setDate('یک ماه')
        }
    } , [props])

    return (
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
            <Modal.Title>خرید  {props.info.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                {props.info.title} با قیمت  {props.info[props.price.toString()].toLocaleString()} تومان و با مدت زمان {date} خریداری شود ؟
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

export default PackInfo