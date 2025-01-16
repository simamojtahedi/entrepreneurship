import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Champions = () => {
    const SignInSchema = Yup.object().shape({
        week: Yup.string().required('پر کردن این فیلد الزامی است'),
        month: Yup.string().required('پر کردن این فیلد الزامی است'),
        period: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
          week: '',
          month: '',
          period: ''
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: values => {
          
        },
    });

    return (
        <Col lg={6} className='p-2'>
            <Form className='top-users-info' onSubmit={formik.handleSubmit}>
                <h6>قهرمانان</h6>
                <div className='top-users-table'>
                    <div className='form-group'>
                        <h5>هفته</h5>
                        <Form.Control type="text" name='week' {...formik.getFieldProps('week')} />
                        {formik.touched.week && formik.errors.week && <div className='formik-error'>{formik.errors.week}</div>}
                    </div>
                    <div className='form-group'>
                        <h5>ماه</h5>
                        <Form.Control type="text" name='month' {...formik.getFieldProps('month')} />
                        {formik.touched.month && formik.errors.month && <div className='formik-error'>{formik.errors.month}</div>}
                    </div>
                    <div className='form-group'>
                        <h5>دوره</h5>
                        <Form.Control type="text" name='period' {...formik.getFieldProps('period')} />
                        {formik.touched.period && formik.errors.period && <div className='formik-error'>{formik.errors.period}</div>}
                    </div>
                    <Button className='main-btn' type="submit" disabled={!formik.isValid}> ارسال </Button>
                </div>
            </Form>
        </Col>
    )
}

export default Champions
