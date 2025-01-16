import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Input from '../../../Utils/form/Input'
import SelectBox from '../../../Utils/form/SelectBox'
import Textarea from '../../../Utils/form/Textarea'
import MainModal from '../../../Utils/modal/MainModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ForumModal = (props) => {
    const statusOptions = [
        { value: 'دفتر کار', label: 'دفتر کار' },
        { value: 'مهارتکده', label: 'مهارتکده' },
        { value: 'کلینیک مشاوره', label: 'کلینیک مشاوره' },
        { value: 'عمومی', label: 'عمومی' },
    ];

    const handleCreateSubject = useFormik({
        initialValues: { SubjectName: '', SubjectOrder: '' },
        validateOnMount: true,
        validationSchema: Yup.object().shape({
            SubjectName: Yup.string().required('پر کردن این فیلد الزامی است'),
            SubjectOrder: Yup.string().required('پر کردن این فیلد الزامی است'),
        }),
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
          props.handleClose()
        },
    });

    const handleCreateRow = useFormik({
        initialValues: { SubjectName: '', status: '', description: '' },
        validateOnMount: true,
        validationSchema: Yup.object().shape({
            SubjectName: Yup.string().required('پر کردن این فیلد الزامی است'),
            status: Yup.string().required('پر کردن این فیلد الزامی است'),
            description: Yup.string().required('پر کردن این فیلد الزامی است'),
        }),
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
          props.handleClose()
        },
    });

    const handleEditSubject = useFormik({
        initialValues: { SubjectName: '', SubjectOrder: '' },
        validateOnMount: true,
        validationSchema: Yup.object().shape({
            SubjectName: Yup.string().required('پر کردن این فیلد الزامی است'),
            SubjectOrder: Yup.string().required('پر کردن این فیلد الزامی است'),
        }),
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
          props.handleClose()
        },
    });

    const handleEditRow = useFormik({
        initialValues: { SubjectName: '', status: '', description: '' },
        validateOnMount: true,
        validationSchema: Yup.object().shape({
            SubjectName: Yup.string().required('پر کردن این فیلد الزامی است'),
            status: Yup.string().required('پر کردن این فیلد الزامی است'),
            description: Yup.string().required('پر کردن این فیلد الزامی است'),
        }),
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
          props.handleClose()
        },
    });

    return (
        <MainModal 
            show={props.show} 
            size='lg' 
            handleClose={props.handleClose} 
            title={
                props.modalInfo.createSubject ? 'ایجاد بخش' :
                props.modalInfo.createRow ? 'ایجاد تالار' :
                props.modalInfo.editSubject ? 'ویرایش بخش' :
                props.modalInfo.editRow ? 'ویرایش تالار' :
                props.modalInfo.deleteSubject ? 'حذف بخش' :
                'حذف تالار'
            }
        >
            {props.modalInfo.createSubject ?
                <Form onSubmit={handleCreateSubject.handleSubmit}>
                    <Input name='SubjectName' label='نام بخش:' formik={handleCreateSubject} />
                    <Input name='SubjectOrder' label='ترتیب:' formik={handleCreateSubject} />
                    <Button className='btn-sm px-3' type='submit' disabled={!handleCreateSubject.isValid}>ایجاد</Button>
                </Form>
            :
            props.modalInfo.createRow ?
                <Form onSubmit={handleCreateRow.handleSubmit}>
                    <Input name='SubjectName' label='نام تالار:' formik={handleCreateRow} />
                    <SelectBox name='status' label='بخش مرتبط:' selectOption={statusOptions} formik={handleCreateRow} />
                    <Textarea name='description' label='توضیحات:' formik={handleCreateRow} />
                    <Button className='btn-sm px-3' type='submit' disabled={!handleCreateRow.isValid}>ایجاد</Button>
                </Form>
            : 
            props.modalInfo.editSubject ?
                <Form onSubmit={handleEditSubject.handleSubmit}>
                    <Input name='SubjectName' label='ویرایش بخش:' formik={handleEditSubject} />
                    <Input name='SubjectOrder' label='ترتیب:' formik={handleEditSubject} />
                    <Button className='btn-sm px-3' type='submit' disabled={!handleEditSubject.isValid}>ثبت تغییرات</Button>
                </Form>
            :
            props.modalInfo.editRow ?
                <Form onSubmit={handleEditRow.handleSubmit}>
                    <Input name='SubjectName' label='ویرایش تالار:' formik={handleEditRow} />
                    <SelectBox name='status' label='بخش مرتبط:' selectOption={statusOptions} formik={handleEditRow} />
                    <Textarea name='description' label='توضیحات:' formik={handleEditRow} />
                    <Button className='btn-sm px-3' type='submit' disabled={!handleEditRow.isValid}>ثبت تغییرات</Button>
                </Form>
            : 
                <div>
                    <p>تالار مورد نظر حذف شود ؟</p>
                    <div className='d-flex justify-content-end'>
                        <Button className='btn-sm px-4 mx-1' variant='secondary'>انصراف</Button>
                        <Button className='btn-sm px-4 mx-1' variant='danger'>حذف</Button>
                    </div>
                </div>
            }
        </MainModal>
    )
}

export default ForumModal
