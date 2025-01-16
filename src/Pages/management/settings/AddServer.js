import React from 'react'
import { Button, Form } from 'react-bootstrap'
import MainModal from '../../../Utils/modal/MainModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../../../Utils/form/Input'

const AddServer = (props) => {
    const SignInSchema = Yup.object().shape({
        address: Yup.string().required('پر کردن این فیلد الزامی است'),
        security: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
          address: '',
          security: ''
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values, {resetForm}) => {
          
          resetForm()
          props.handleCreate()
        },
    });

    return (
        <MainModal show={props.addModal} handleClose={props.handleClose} title='افزودن سرور جدید' >
            <Form onSubmit={formik.handleSubmit} >
                <Input name='address' label='آدرس سرور:' formik={formik} />
                <Input name='security' label='security salt:' formik={formik} />
                <div className='d-flex justify-content-end'>
                    <Button variant="secondary" className='mx-1' onClick={props.handleClose}>
                        انصراف
                    </Button>
                    <Button variant="success" type="submit" className='mx-1' disabled={!formik.isValid}>
                        افزودن
                    </Button>
                </div>
            </Form>
        </MainModal>
    )
}

export default AddServer
