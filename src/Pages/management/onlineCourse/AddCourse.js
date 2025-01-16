import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import ImageUploading from 'react-images-uploading';
import {HiUpload} from 'react-icons/hi'
import {IoCloseSharp} from 'react-icons/io5'
import {AiFillEdit} from 'react-icons/ai'
import { toast } from 'react-toastify';
import MainModal from '../../../Utils/modal/MainModal';
import Input from '../../../Utils/form/Input'
import Textarea from '../../../Utils/form/Textarea'
import SelectDate from '../../../Utils/form/SelectDate'
import FileUplaod from '../../../Utils/form/FileUplaod'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const AddCourse = (props) => {
    const [registerDate, setRegisterDate] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [images, setImages] = useState([]);

    const SignInSchema = Yup.object().shape({
        level: Yup.string().required('پر کردن این فیلد الزامی است'),
        title: Yup.string().required('پر کردن این فیلد الزامی است'),
        presenter: Yup.string().required('پر کردن این فیلد الزامی است'),
        type: Yup.string().required('پر کردن این فیلد الزامی است'),
        time: Yup.string().required('پر کردن این فیلد الزامی است'),
        price: Yup.string().required('پر کردن این فیلد الزامی است'),
        credit: Yup.string().required('پر کردن این فیلد الزامی است'),
        teacher: Yup.string().required('پر کردن این فیلد الزامی است'),
        organization: Yup.string().required('پر کردن این فیلد الزامی است'),
        number: Yup.string().required('پر کردن این فیلد الزامی است'),
        percourse: Yup.string().required('پر کردن این فیلد الزامی است'),
        description: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            level: '',
            title: '',
            presenter: '',
            type: '',
            time: '',
            price: '',
            credit: '',
            teacher: '',
            organization: '',
            number: '',
            percourse: '',
            description: ''
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
            
            resetForm();
        },
    });

    return (
        <MainModal show={props.addCourse} handleClose={() => props.setAddCourse(false)} title='ایجاد'>
            <Form onSubmit={formik.handleSubmit}>
                <Input name='level' label='سطح دوره:' formik={formik} />
                <Input name='title' label='نام دوره:' formik={formik} />
                <Input name='presenter' label='ارائه دهنده:' formik={formik} />
                <Input name='type' label='نوع دوره:' formik={formik} />
                <Input name='time' label='ساعات دوره:' formik={formik} />
                <SelectDate controlId='register' label='مهلت ثبت نام:' date={registerDate} setDateState={setRegisterDate} />
                <SelectDate controlId='start_date' label='تاریخ شروع دوره:' date={startDate} setDateState={setStartDate} />
                <SelectDate controlId='end_date' label='تاریخ اتمام دوره:' date={endDate} setDateState={setEndDate} />
                <Input name='price' label='مبلغ نقدی:' formik={formik} />
                <Input name='credit' label='مبلغ اعتبار:' formik={formik} text='ریال' />
                <Input name='teacher' label='نام مدرس:' formik={formik} />
                <Input name='organization' label='سازمان:' formik={formik} />
                <Input name='number' label='ظرفیت دوره:' formik={formik} type='number' text='نفر' />
                <Input name='percourse' label='پیش نیاز دوره:' formik={formik} />
                <Textarea name='description' label='توضیحات:' formik={formik} />
                <FileUplaod
                    maxNumber='1'
                    images={images}
                    setImages={setImages}
                />
                <Button className='btn-sm px-3' type='submit' disabled={!formik.isValid}>افزودن</Button>
            </Form>
        </MainModal>
    )
}

export default AddCourse
