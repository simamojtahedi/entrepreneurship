import React from 'react'
import { Button, Form } from 'react-bootstrap'
import MainModal from '../../../Utils/modal/MainModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../../../Utils/form/Input'

const EditServer = (props) => {
    const SignInSchema = Yup.object().shape({
        address: Yup.string().required('پر کردن این فیلد الزامی است'),
        security: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
            id:props.data.id,
            address: props.data.address,
            security: props.data.security
        },
        enableReinitialize: true,
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values, {resetForm}) => {
            
            resetForm()
            props.handleEdit()
        },
    });

    return (
        <MainModal show={props.editModal} handleClose={props.handleClose} title='ویرایش سرور' >
            <Form onSubmit={formik.handleSubmit} >
                <Input name='address' label='آدرس سرور:' formik={formik} />
                <Input name='security' label='security salt:' formik={formik} />

                <div className='d-flex justify-content-end'>
                    <Button variant="secondary" className='mx-1' onClick={props.handleClose}>
                        انصراف
                    </Button>
                    <Button variant="success" type="submit" className='mx-1' disabled={!formik.isValid}>
                        ویرایش
                    </Button>
                </div>
            </Form>
        </MainModal>
    )
}

export default EditServer
