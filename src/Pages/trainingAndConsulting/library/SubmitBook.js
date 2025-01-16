import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import DatePicker, { DateObject } from "react-multi-date-picker"
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { fixNumbers } from '../../../Utils/functions';
import Input from '../../../Utils/form/Input';
import SelectDate from '../../../Utils/form/SelectDate';
import Textarea from '../../../Utils/form/Textarea';

const SubmitBook = () => {
    const [date, setDate] = useState()

    const SignInSchema = Yup.object().shape({
        title: Yup.string().required('پر کردن این فیلد الزامی است'),
        mainsubject: Yup.string().required('پر کردن این فیلد الزامی است'),
        subject_1: Yup.string().required('پر کردن این فیلد الزامی است'),
        subject_2: Yup.string().required('پر کردن این فیلد الزامی است'),
        writer: Yup.string().required('پر کردن این فیلد الزامی است'),
        publisher: Yup.string().required('پر کردن این فیلد الزامی است'),
        awards: Yup.string().required('پر کردن این فیلد الزامی است'),
        file: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            mainsubject: '',
            subject_1: '',
            subject_2: '',
            writer: '',
            publisher: '',
            awards: '',
            file: '',
            date: ''
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
            values.date = fixNumbers(date)
            
            resetForm();
        },
    });


    return (
        <Form onSubmit={formik.handleSubmit} className='col-lg-6'>
            <Input name='title' label='عنوان کتاب:' formik={formik} />
            <Input name='mainsubject' label='موضوع اصلی:' formik={formik} />
            <Input name='subject_1' label='موضوع فرعی یک:' formik={formik} />
            <Input name='subject_2' label='موضوع فرعی دو:' formik={formik} />
            <Input name='writer' label='نویسنده / مترجم / گردآورنده:' formik={formik} />
            <Input name='publisher' label='ناشر:' formik={formik} />
            <SelectDate controlId='date' label='تاریخ چاپ:' date={date} setDateState={setDate} />
            <Textarea name='awards' label='جوایز و افتخارات کسب شده:' formik={formik} />

            <Form.Group as={Row} className="mb-3" controlId="file">
                <Form.Label column sm={4}>بارگذاری فایل کتاب </Form.Label>
                <Col sm={8}> 
                    <Form.Control type="file" {...formik.getFieldProps('file')} /> 
                    {formik.touched.file && formik.errors.file && <div className='formik-error'>{formik.errors.file}</div>}
                </Col>
            </Form.Group>

            <Button variant='success' className='btn-sm px-4' type="submit" disabled={!formik.isValid} > ثبت </Button>
        </Form>
    )
}

export default SubmitBook
