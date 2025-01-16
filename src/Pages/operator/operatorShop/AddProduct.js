import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Select from 'react-select';

const AddProduct = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'در حال ثبت نام', label: 'در حال ثبت نام' },
        { value: 'اتمام مهلت', label: 'اتمام مهلت' },
        { value: 'تکمیل شده', label: 'تکمیل شده' },
      ];

    return (
        <div className='mt-5 animate__animated animate__fadeInDown' >
            <Form>
                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-name">
                    <Form.Label column sm={3}>نام مرکز:</Form.Label>
                    <Col sm={9}><Form.Control type="text" /></Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-type">
                    <Form.Label column sm={3}>نوع:</Form.Label>
                    <Col sm={9}><Form.Control type="text" /></Col>
                    <span>میتواند شامل مجازی٬ کارگاهی٬ حضوری و غیره باشد</span>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-time">
                    <Form.Label column sm={3}>مدت زمان:</Form.Label>
                    <Col sm={9}><Form.Control type="text" /></Col>
                    <span>دقیقه</span>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-register">
                    <Form.Label column sm={3}>مهلت ثبت نام:</Form.Label>
                    <Col sm={9}><Form.Control type="text" /></Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-date">
                    <Form.Label column sm={3}>تاریخ مشاوره:</Form.Label>
                    <Col sm={9}><Form.Control type="text" /></Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-time">
                    <Form.Label column sm={3}>مبلغ نقدی:</Form.Label>
                    <Col sm={9}><Form.Control type="text" /></Col>
                    <span>ریال</span>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-credit">
                    <Form.Label column sm={3}>مبلغ اعتباری:</Form.Label>
                    <Col sm={9}><Form.Control type="text" /></Col>
                    <span>عدد صفر به معنای بدون بورسیه می باشد.</span>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-credit">
                    <Form.Label column sm={3}>امتیاز:</Form.Label>
                    <Col sm={9}><Form.Control type="text" /></Col>
                    <span>عدد صفر به معنای بدون بورسیه می باشد.</span>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-status">
                    <Form.Label column sm={3}>وضعیت:</Form.Label>
                    <Col sm={9}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder='انتخاب'
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-consultant-name">
                    <Form.Label column sm={3}>نام مشاور:</Form.Label>
                    <Col sm={9}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder='انتخاب'
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 col-lg-6" controlId="center-consultant-name">
                    <Form.Label column sm={3}>کلینیک:</Form.Label>
                    <Col sm={9}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder='انتخاب'
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 2 }}>
                    <Button type="submit" className='mt-3 btn-success btn-sm px-3'>ثبت</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddProduct
