import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const Ticket = (props) => {
    const [answer, setAnswer] = useState("")

    const handleClose = () => {
        props.close()
    }
    
    const handleTicketAnswer = (e) => {
        e.preventDefault()
        (answer)
        setAnswer('')
        props.close()
    }

    return (
        <Modal show={props.show} scrollable={true}>
            <Modal.Header>
            <Modal.Title>پیگیری</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="ticket-question">
                    <div className="ticket-title">
                        <h6>تست</h6>
                        <span>21 مهر 1400 ساعت 14:28</span>
                    </div>
                    <p>این یک متن برای بررسی تیکت آزمایشی است</p>
                </div>
                <div className="ticket-answer">
                    <div className="ticket-title">
                        <h6>پشتیبان</h6>
                        <span>21 مهر 1400 ساعت 14:28</span>
                    </div>
                    <p>سلام تیکت شما عالی بود سلام تیکت شما عالی بود</p>
                </div>
                <Form className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="message-text" > پاسخ : </label>
                        <textarea className="form-control" id="message-text" value={answer} onChange={e => setAnswer(e.target.value)}></textarea>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" type='button' className='btn-sm px-3' onClick={handleClose}>
                بستن
            </Button>
            <Button variant="primary" type='submit' className='btn-sm px-3' onClick={handleTicketAnswer}>
                ارسال
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Ticket
