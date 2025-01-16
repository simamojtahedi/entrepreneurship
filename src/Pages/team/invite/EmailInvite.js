import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Input from '../../../Utils/form/Input'

const EmailInvite = () => {
    const SignInSchema = Yup.object().shape({
        firstname: Yup.string().required('پر کردن این فیلد الزامی است'),
        lastname: Yup.string().required('پر کردن این فیلد الزامی است'),
        email: Yup.string().email('لطفا آدرس ایمیل صحیح خود را وارد کنید').required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: ''
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
            resetForm();
        },
    });

    return (
        <>
            <p className="my-4">لطفا فرم زیر را به صورت فارسی پر کنید :</p>
            <Form onSubmit={formik.handleSubmit} className='col-lg-6'>
                <Input name='firstname' label='نام:' formik={formik} />
                <Input name='lastname' label='نام خانوادگی:' formik={formik} />
                <Input name='email' label='ایمیل:' formik={formik} type='email' />
                <Button className='btn-success btn-sm px-3 mt-3' type="submit" disabled={!formik.isValid} > ارسال </Button>
            </Form>   
        </>
    )
}

export default EmailInvite
