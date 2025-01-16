import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import FileUplaod from '../../../Utils/form/FileUplaod'
import Input from '../../../Utils/form/Input'
import SelectBox from '../../../Utils/form/SelectBox'
import SelectDate from '../../../Utils/form/SelectDate'
import Textarea from '../../../Utils/form/Textarea'
import MainModal from '../../../Utils/modal/MainModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const AdminLibModal = (props) => {
    const [images, setImages] = useState([]);
    const [dateState, setDateState] = useState();

    const options = [
        { value: 'انتخاب کنید', label: '' },
        { value: 'در حال بررسی', label: 'در حال بررسی' },
        { value: 'تایید شده', label: 'تایید شده' },
        { value: 'رد شده', label: 'رد شده' },
    ];

    const SignInSchema = Yup.object().shape({
        bookTitle: Yup.string().required('پر کردن این فیلد الزامی است'),
        bookMainSubject: Yup.string().required('پر کردن این فیلد الزامی است'),
        bookSubject1: Yup.string().required('پر کردن این فیلد الزامی است'),
        bookSubject2: Yup.string().required('پر کردن این فیلد الزامی است'),
        writer: Yup.string().required('پر کردن این فیلد الزامی است'),
        publisher: Yup.string().required('پر کردن این فیلد الزامی است'),
        prize: Yup.string().required('پر کردن این فیلد الزامی است'),
        situation: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            bookTitle: '',
            bookMainSubject: '',
            bookSubject1: '',
            bookSubject2: '',
            writer: '',
            publisher: '',
            prize: '',
            situation: ''
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
        <MainModal show={props.show} handleClose={props.handleClose} title='جزئیات'>
            <Form onSubmit={formik.handleSubmit}>
                <SelectBox name='situation' label='وضعیت:' selectOption={options} formik={formik} />
                <Input name='bookTitle' label='عنوان کتاب:' formik={formik} />
                <Input name='bookMainSubject' label='موضوع اصلی:' formik={formik} />
                <Input name='bookSubject1' label='موضوع فرعی 1:' formik={formik} />
                <Input name='bookSubject2' label='موضوع فرعی 2:' formik={formik} />
                <Input name='writer' label='نویسنده | مترجم | گردآورنده:' formik={formik} />
                <Input name='publisher' label='ناشر:' formik={formik} />
                <SelectDate controlId='date' label='تاریخ چاپ' date={dateState} setDateState={setDateState} />
                <Textarea name='prize' label='جوایز و افتخارات:' formik={formik} />
                <FileUplaod
                    maxNumber='1'
                    images={images}
                    setImages={setImages}
                />
                <Button className='btn-sm px-4' type='submit' disabled={!formik.isValid}>ثبت</Button>
            </Form>
        </MainModal>
    )
}

export default AdminLibModal
