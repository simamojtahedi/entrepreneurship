import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import * as Yup from 'yup'
import Input from '../../../Utils/form/Input'
import Textarea from '../../../Utils/form/Textarea'

const NewQuestion = () => {
    const SignInSchema = Yup.object().shape({
        title: Yup.string().required('پر کردن این فیلد الزامی است'),
        content: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
          title: '',
          content: ''
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: values => {
          
        },
    });

    return (
        <>
            <Form onSubmit={formik.handleSubmit} className='col-lg-6' >
                <Input name='title' label='عنوان:' formik={formik} />
                <Textarea name='content' label='متن:' formik={formik} />
                <Button variant="primary" type="submit" className="main-btn mt-4" disabled={!formik.isValid}>
                    ارسال
                </Button>
            </Form> 
        </>
    )
}

export default NewQuestion
