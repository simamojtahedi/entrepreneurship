import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Form } from 'react-bootstrap'
import Input from '../../../Utils/form/Input'

const SmsInvite = () => {
    const SignInSchema = Yup.object().shape({
        firstname: Yup.string().required('پر کردن این فیلد الزامی است'),
        lastname: Yup.string().required('پر کردن این فیلد الزامی است'),
        number: Yup.string().required('پر کردن این فیلد الزامی است').min(11, 'شماره همراه نامعتبر است'),
    })

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            number: ''
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
                <Input name='number' label='شماره همراه:' formik={formik} />
                <Button className='btn-success btn-sm px-3 mt-3' type="submit" disabled={!formik.isValid} > ارسال </Button>
            </Form>   
        </>
    )
}

export default SmsInvite
