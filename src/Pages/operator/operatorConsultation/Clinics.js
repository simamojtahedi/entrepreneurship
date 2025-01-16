import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Input from '../../../Utils/form/Input'
import MainModal from '../../../Utils/modal/MainModal'
import MainTable from '../../../Utils/table/MainTable'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Clinics = () => {
    const [clinicData, setClinicData] = useState({})
    const [clinicEdit, setClinicEdit] = useState(false)
    const [clinicDelete, setClinicDelete] = useState(false)

    const api = [ 
        {code: '1', name: 'کلینیک مدیریت'},
        {code: '2', name: 'کلینیک کارآفرینی'},
        {code: '3', name: 'کلینیک کاریابی'},
        {code: '4', name: 'کلینیک مشاوره تحصیلی'},
        {code: '5', name: 'کلینیک تعاون'},
        {code: '6', name: 'کلینیک امید'},
    ]

    const data = api.map(v => ({...v, actions: 
        <div className=''>
            <Button className='btn-warning btn-sm px-3 mx-1' onClick={() => handleEditModal(v)}>ویرایش</Button>
            <Button className='btn-danger btn-sm px-3 mx-1' onClick={() => handleDeleteModal(v)}>حذف</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام', accessor: 'name' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    const handleEditModal = (data) => {
        setClinicData(data)
        setClinicEdit(true)
    }

    const handleDeleteModal = (data) => {
        setClinicData(data)
        setClinicDelete(true)
    }

    const handleClose = () => {
        setClinicEdit(false)
        setClinicDelete(false)
    }

    const SignInSchema = Yup.object().shape({
        name: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
            name: ''
        },
        enableReinitialize: true,
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
          handleClose()
        },
    });

    return (
        <>
            <div className='mt-3' >
                <MainTable data={data} columns={columns} />
            </div>
            {clinicEdit && 
                <MainModal show={clinicEdit} handleClose={handleClose} title='ویرایش کلینیک' >
                    <Form onSubmit={formik.handleSubmit}>
                        <Input name='name' label='نام کلینیک:' formik={formik} />
                        <Button className='btn-sm px-4' type='submit' disabled={!formik.isValid}>ویرایش</Button>
                    </Form>
                </MainModal>
            }
            {clinicDelete && 
                <MainModal show={clinicDelete} handleClose={handleClose} title='حذف کلینیک' >
                    <p>{clinicData.name} حذف شود ؟</p>
                    <div className='d-flex justify-content-end'>
                        <Button className='btn-sm px-3 mx-1' variant='secondary' >انصراف</Button>
                        <Button className='btn-sm px-3 mx-1' variant='danger' >حذف</Button>
                    </div>
                </MainModal>
            }
        </>
    )
}

export default Clinics
