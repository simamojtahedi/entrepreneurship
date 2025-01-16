import React from 'react'
import { useFormik } from 'formik'
import { Button, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import '../style.scss'
import {RiInstagramLine, RiTelegramLine, RiTwitterLine} from 'react-icons/ri'
import {Helmet} from "react-helmet";

const Login = ({history}) => {
    const SignInSchema = Yup.object().shape({
        username: Yup.string().required('پر کردن این فیلد الزامی است'),
        password: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
          role: 'admin',
          username: 'sima',
          password: 'sima',
          hide: false
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: values => {
          localStorage.setItem('user', JSON.stringify(values))
          history.push('/')
        },
    });

    
  return (
    <div className='auth'>
        <Helmet>
            <title> ورود </title>
        </Helmet>
        <Row className='auth-container'>
            <div className='col-lg-7 auth-content'>
                <h1 className='animate__animated animate__fadeInDown'>ورود</h1>
                <Form onSubmit={formik.handleSubmit} className='animate__animated animate__fadeInDown'>
                    <Form.Group controlId="username" className='form-group'>
                        <Form.Control type="text" autoComplete="false" placeholder='نام کاربری یا کد ملی' {...formik.getFieldProps('username')} />
                        {formik.touched.username && formik.errors.username && <div className='auth-error'>{formik.errors.username}</div>}
                    </Form.Group>
                    <Form.Group controlId="password" className='form-group'>
                        <Form.Control type="password" autoComplete="false" placeholder='رمز عبور' {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password && <div className='auth-error'>{formik.errors.password}</div>}
                    </Form.Group>
                    <Form.Group controlId="hide" className='hide'>
                        <Form.Check type="checkbox" label="مخفی شدن وضعیت برای دوستان" {...formik.getFieldProps('hide')} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!formik.isValid}>
                        ورود
                    </Button>
                    <div className='auth-links'>
                        <h6>کاربر جدید هستید؟ <Link to='/register'>ثبت نام </Link></h6>
                        <h6>رمز عبور را فراموش کرده اید ؟<Link to='/forget-password'>بازیابی رمز عبور</Link></h6>
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

export default Login