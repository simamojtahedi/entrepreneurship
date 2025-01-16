import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import Allteams from './Allteams'
import './style.scss'

const Teams = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <Wrapper pageTitle="هسته‌های کارآفرینی" >
            <div className="page-wrapper">
                <BreadCrumb> هسته‌های کارآفرینی </BreadCrumb>
                <div className="px-5 mt-5">
                    <p>در این بخش هر کاربر پس از شناخت نسبی حاصل شده از دوستان یا افراد دعوت شده با سامانه و نیز پیام ارسالی در مرحله قبلی نسبت به تشکیل تیم و هسته اولیه جهت راه اندازی کسب و کار اقدام می نماید.</p>
                </div>

                <div>
                    <button type="button" className="btn btn-success col-md-2 offset-md-5 mt-4" onClick={() => setShow(true)} >ایجاد هسته</button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>هسته جدید</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="text-center">
                                برای ایجاد هسته نتیجه آزمون غربالگری شما باید 300 یا بالاتر باشد
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            بستن
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <Allteams />
            </div>
        </Wrapper>
    )
}

export default Teams
