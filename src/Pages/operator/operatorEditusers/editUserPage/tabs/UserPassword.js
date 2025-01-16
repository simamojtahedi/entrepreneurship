import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Input from '../../../../../Utils/form/Input';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const UserPassword = () => {
    const SignInSchema = Yup.object().shape({
        currentPass: Yup.string().required('پر کردن این فیلد الزامی است'),
        newPass: Yup.string().required('پر کردن این فیلد الزامی است'),
        repeatNewPass: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            currentPass: '',
            newPass: '',
            repeatNewPass: '',
        },
        enableReinitialize: true,
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
        },
    });

    return (
        <Form className='col-lg-6' onSubmit={formik.handleSubmit}>
            <Input name='currentPass' label='رمز عبور فعلی:' formik={formik} />
            <Input name='newPass' label='رمز عبور جدید:' formik={formik} />
            <Input name='repeatNewPass' label='تکرار رمز عبور جدید:' formik={formik} />
            <Button className='btn-sm px-4' type='submit' disabled={!formik.isValid}>ثبت</Button>
        </Form>
    )
}

export default UserPassword
