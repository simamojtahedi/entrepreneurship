import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const UserCertificates = () => {
    return (
        <div>
            <Row className="mb-4">
                <Col sm={4} > فایل عکس </Col>
                <Col sm={8}><Button className='btn-sm px-3 btn-success'>نمایش</Button></Col>
            </Row>
            <Row className="mb-4">
                <Col sm={4} > کارت ملی </Col>
                <Col sm={8}><Button className='btn-sm px-3 btn-success' disabled >نمایش</Button></Col>
            </Row>
            <Row className="mb-4">
                <Col sm={4} > شناسنامه </Col>
                <Col sm={8}><Button className='btn-sm px-3 btn-success' disabled>نمایش</Button></Col>
            </Row>
            <Row className="mb-4">
                <Col sm={4} > ارسال پیام </Col>
                <Col sm={8}><Button className='btn-sm px-3 btn-success'>پیام نقص مدارک</Button></Col>
            </Row>
            <Row className="mb-4">
                <Col sm={4} > وضعیت حساب </Col>
                <Col sm={8}><span className='notRegistered'>تایید نشده</span></Col>
            </Row>
        </div>
    )
}

export default UserCertificates
