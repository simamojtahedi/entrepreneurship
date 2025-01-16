import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ManageTopUsers = () => {
    const SignInSchema = Yup.object().shape({
        job_1: Yup.string().required('پر کردن این فیلد الزامی است'),
        job_2: Yup.string().required('پر کردن این فیلد الزامی است'),
        job_3: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
          job_1: '',
          job_2: '',
          job_3: ''
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: values => {
        },
    });

    return (
        <Col lg={6} className='p-2'>
            <Form className='top-users-info' onSubmit={formik.handleSubmit}>
                <h6>برترین‌های این ماه باشگاه</h6>
                <div className='top-users-table'>
                    <div className='form-group'>
                        <h5>کارجو</h5>
                        <Form.Control type="text" name='job-1' {...formik.getFieldProps('job_1')} />
                        {formik.touched.job_1 && formik.errors.job_1 && <div className='formik-error'>{formik.errors.job_1}</div>}
                    </div>
                    <div className='form-group'>
                        <h5>کارفرما</h5>
                        <Form.Control type="text" name='job-2' {...formik.getFieldProps('job_2')} />
                        {formik.touched.job_2 && formik.errors.job_2 && <div className='formik-error'>{formik.errors.job_2}</div>}
                    </div>
                    <div className='form-group'>
                        <h5>مشاور</h5>
                        <Form.Control type="text" name='job-3' {...formik.getFieldProps('job_3')} />
                        {formik.touched.job_3 && formik.errors.job_3 && <div className='formik-error'>{formik.errors.job_3}</div>}
                    </div>
                    <Button className='main-btn' type="submit" disabled={!formik.isValid}> ارسال </Button>
                </div>
            </Form>
        </Col>
    )
}

export default ManageTopUsers
