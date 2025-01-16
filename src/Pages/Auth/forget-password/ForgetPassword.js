import React from 'react'
import { useFormik } from 'formik'
import { Button, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import '../style.scss'
import {RiInstagramLine, RiTelegramLine, RiTwitterLine} from 'react-icons/ri'
import {Helmet} from "react-helmet";

const ForgetPassword = () => {
    const PasswordSchema = Yup.object().shape({
        meliCode: Yup.string().required('پر کردن این فیلد الزامی است'),
        number: Yup.string().required('پر کردن این فیلد الزامی است').min(11, 'شماره همراه نامعتبر است'),
    })
    
    const formik = useFormik({
        initialValues: {
          meliCode: '',
          number: ''
        },
        validateOnMount: true,
        validationSchema: PasswordSchema,
        onSubmit: values => {
        },
    });

  return (
    <div className='auth'>
        <Helmet>
            <title> بازیابی رمز عبور </title>
        </Helmet>
        <Row className='auth-container'>
            <div className='col-lg-7 auth-content'>
                <div className='animate__animated animate__fadeInDown'>
                    <h1>بازیابی رمز عبور</h1>
                    <p>اگر رمز عبور خود را به یاد نمی آورید، فرم زیر را پر کنید تا برایتان رمز جدیدی ارسال کنیم</p>
                </div>
                <Form onSubmit={formik.handleSubmit} className='animate__animated animate__fadeInDown'>
                    <Form.Group controlId="meliCode" className='form-group'>
                        <Form.Control type="text" autoComplete="false" placeholder='کد ملی' {...formik.getFieldProps('meliCode')} />
                        {formik.touched.meliCode && formik.errors.meliCode && <div className='auth-error'>{formik.errors.meliCode}</div>}
                    </Form.Group>
                    <Form.Group controlId="number" className='form-group'>
                        <Form.Control type="text" autoComplete="false" placeholder='شماره موبایل' {...formik.getFieldProps('number')} />
                        {formik.touched.number && formik.errors.number && <div className='auth-error'>{formik.errors.number}</div>}
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!formik.isValid}>
                        درخواست رمز جدید
                    </Button>
                    <div className='auth-links'>
                        <h6>کاربر جدید هستید؟ <Link to='/register'>ثبت نام </Link></h6>
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

export default ForgetPassword