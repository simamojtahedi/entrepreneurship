import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Textarea from '../form/Textarea'
import SelectBox from '../form/SelectBox'
import './style.scss'

const OperatorSupportAction = (props) => {
    const responseOptions = [
        { value: 'انتخاب کنید', label: '' },
        { value: 'ایمیل', label: 'ایمیل' },
        { value: 'پیامک', label: 'پیامک' },
    ];

    const SignInSchema = Yup.object().shape({
        response_type: Yup.string().required('پر کردن این فیلد الزامی است'),
        answer: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            response_type: '',
            answer: '',
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
            const id = props.data.id
            const valuesToSend = { ...values, id }
            (valuesToSend);
            props.response()
            resetForm();
        },
    });

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.data.message}</p>
                <div className='d-flex justify-content-end'>
                    <span>{props.data.date}</span>
                </div>
                <hr />

                <div className='OperatorSupportActionAnswer'>
                    <h6>پاسخ</h6>
                    <Form>
                        <SelectBox name='response_type' label='ارسال پاسخ به صورت:' selectOption={responseOptions} formik={formik} />
                        <Textarea name='answer' label='پاسخ:' formik={formik} />
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" className='btn-sm' onClick={props.handleClose}>
                انصراف
            </Button>
            <Button variant="success" className='btn-sm' type="submit" onClick={formik.handleSubmit} disabled={!formik.isValid}>
                ارسال
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default OperatorSupportAction
