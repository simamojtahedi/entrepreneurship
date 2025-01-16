import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './style.scss'

const DesiredPackInfo = (props) => {
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        if (props.price === 'oneYear') {
            setDate('یک سال')
            setPrice((props.total * 0.95 * 12).toLocaleString())
        } else if (props.price === 'sixMonth')
        {
            setDate('شش ماه')
            setPrice((props.total * 0.95 * 6).toLocaleString())
        } else if (props.price === 'threeMonth')
        {
            setDate('سه ماه')
            setPrice((props.total * 0.95 * 3).toLocaleString())
        } else {
            setDate('یک ماه')
            setPrice((props.total).toLocaleString())
        }
    } , [props])

    return (
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
            <Modal.Title>خرید بسته دلخواه </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                <h6><strong>با امکانات :</strong></h6>
                <h6> بسته امکانات پایه </h6>
                <h6>بسته کلاس زنده نامحدود {props.checked.classNum}*35 نفری </h6>
                <h6>{props.checked.exam && 'بسته آزمون ساز'} </h6>
                <h6>{props.checked.report && 'بسته صدور کارنامه'} </h6>
                <h6>{props.checked.shop && 'بسته فروشگاه فایل، کتاب و مقاله'} </h6>
                <h6>{props.checked.virtualSystem && 'بسته اتصال به سامانه مجازی متقاضی'} </h6>
                <h6><strong> به مدت {date} </strong></h6>
                <h6><strong> و با قیمت {price} تومان خریداری شود ؟ </strong></h6>
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

export default DesiredPackInfo