import React from 'react'
import { useFormik } from 'formik'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import '../style.scss'
import {RiInstagramLine, RiTelegramLine, RiTwitterLine} from 'react-icons/ri'
import {Helmet} from "react-helmet";

const Register = () => {
    const SignUpSchema = Yup.object().shape({
        meliCode: Yup.string().required('پر کردن این فیلد الزامی است'),
        name: Yup.string().required('پر کردن این فیلد الزامی است'),
        lastname: Yup.string().required('پر کردن این فیلد الزامی است'),
        number: Yup.string().required('پر کردن این فیلد الزامی است').min(11, 'شماره همراه نامعتبر است'),
        company: Yup.string().required('پر کردن این فیلد الزامی است'),
        province: Yup.string().required('پر کردن این فیلد الزامی است'),
        city: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            meliCode: '',
            name: '',
            lastname: '',
            number: '',
            company: '',
            province: '',
            city: ''
        },
        validateOnMount: true,
        validationSchema: SignUpSchema,
        onSubmit: values => {
        },
    });

  return (
    <div className='auth'>
        <Helmet>
            <title> ثبت نام </title>
        </Helmet>
        <Row className='auth-container'>
            <div className='col-lg-7 auth-content'>
                <h1 className='animate__animated animate__fadeInDown'>ثبت نام</h1>
                <Form onSubmit={formik.handleSubmit} className='animate__animated animate__fadeInDown'>
                    <Form.Group controlId="meliCode" className='form-group'>
                        <Form.Control type="text" autoComplete="false" placeholder='کد ملی' {...formik.getFieldProps('meliCode')}  />
                        {formik.touched.meliCode && formik.errors.meliCode && <div className='auth-error'>{formik.errors.meliCode}</div>}
                    </Form.Group>
                    <Form.Group controlId="name" className='form-group'>
                        <Form.Control type="text" autoComplete="false" placeholder='نام' {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name && <div className='auth-error'>{formik.errors.name}</div>}
                    </Form.Group>
                    <Form.Group controlId="lastname" className='form-group'>
                        <Form.Control type="text" autoComplete="false" placeholder='نام خانوادگی' {...formik.getFieldProps('lastname')} />
                        {formik.touched.lastname && formik.errors.lastname && <div className='auth-error'>{formik.errors.lastname}</div>}
                    </Form.Group>
                    <Form.Group controlId="number" className='form-group'>
                        <Form.Control type="text" autoComplete="false" placeholder='شماره موبایل' {...formik.getFieldProps('number')} />
                        {formik.touched.number && formik.errors.number && <div className='auth-error'>{formik.errors.number}</div>}
                    </Form.Group>
                    <Form.Group controlId="company" className='form-group'>
                        <Form.Control type="text" autoComplete="false" placeholder='شرکت' {...formik.getFieldProps('company')} />
                        {formik.touched.company && formik.errors.company && <div className='auth-error'>{formik.errors.company}</div>}
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Select className='form-group' name="province" {...formik.getFieldProps('province')} >
                                <option hidden value="استان">استان</option>
                                <option value="تهران">تهران</option>
                            </Form.Select>
                            {formik.touched.province && formik.errors.province && <div className='auth-error'>{formik.errors.province}</div>}
                        </Col>
                        <Col>
                            <Form.Select className='form-group' name="city"{...formik.getFieldProps('city')} >
                                <option hidden value="شهر">شهر</option>
                                <option value="تهران">تهران</option>
                            </Form.Select>
                            {formik.touched.city && formik.errors.city && <div className='auth-error'>{formik.errors.city}</div>}
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" disabled={!formik.isValid}>
                        ثبت نام
                    </Button>
                    <div className='auth-links'>
                        <h6>قبلا عضو شده‌اید ؟ <Link to='/login'>ورود</Link></h6>
                    </div>
                </Form>
                <div className='social-links'>
                    <div className='line-1'></div>
                    <div>
                        <a href="https://www.instagram.com" target="_blank" rel="nofollow"><RiInstagramLine /></a>
                        <a href="https://t.me" target="_blank" rel="nofollow"><RiTelegramLine /></a>
                        <a href="https://twitter.com" target="_blank" rel="nofollow"><RiTwitterLine /></a>
                    </div>
                    <div className='line-2'></div>
                </div>
            </div>
            <div className='col-lg-5 auth-logo'>
                <img src="assets/img/logo.png" alt="Site" />
                <p>اولین سامانه کارآفرینی کشور </p>
                <p className='px-5'> ارائه خدمات به تیم‌های استارتاپی برای رشد، توسعه و راه‌اندازی کسب و کار</p>
            </div>
        </Row>
    </div>
  )
}

export default Register