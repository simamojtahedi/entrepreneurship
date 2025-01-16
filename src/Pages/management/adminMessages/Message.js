import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import MainModal from '../../../Utils/modal/MainModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../../../Utils/form/Input'
import Textarea from '../../../Utils/form/Textarea'

const Message = (props) => {

    const SignInSchema = Yup.object().shape({
        title: Yup.string().required('پر کردن این فیلد الزامی است'),
        content: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
            id: props.data.code,
            title: '',
            content: '',
        },
        enableReinitialize: true,
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
          props.handleClose()
        },
    });

    return (
        <MainModal show={props.show} handleClose={props.handleClose} title={props.data.subject} >
            <p>{props.data.message}</p>
            <div className='d-flex justify-content-end'>
                <span>{props.data.date}</span>
            </div>
            <hr />

            <Form onSubmit={formik.handleSubmit} >
                <h6 className='main_title'>پاسخ</h6>
                <Input name='title' label='عنوان:' formik={formik} />
                <Textarea name='content' label='متن:' formik={formik} />

                <div className='d-flex justify-content-end'>
                    <Button className='btn-sm px-3 btn-success' type='submit' disabled={!formik.isValid}>پاسخ</Button>
                </div>
            </Form>
        </MainModal>
    )
}

export default Message
