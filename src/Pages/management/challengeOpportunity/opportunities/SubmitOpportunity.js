import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Input from '../../../../Utils/form/Input';
import SelectBox from '../../../../Utils/form/SelectBox';
import Textarea from '../../../../Utils/form/Textarea';
import FileUplaod from '../../../../Utils/form/FileUplaod';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SubmitOpportunity = () => {
    const [images, setImages] = useState([]);

    const options = [
        {label: 'کشاورزی' , value: '1' },
        {label: 'صنعت' , value: '2' },
        {label: 'گردشگری' , value: '3' },
    ];

    const SignInSchema = Yup.object().shape({
        title: Yup.string().required('پر کردن این فیلد الزامی است'),
        subject: Yup.string().required('پر کردن این فیلد الزامی است'),
        details: Yup.string().required('پر کردن این فیلد الزامی است'),
        history: Yup.string().required('پر کردن این فیلد الزامی است'),
        actions: Yup.string().required('پر کردن این فیلد الزامی است'),
        host: Yup.string().required('پر کردن این فیلد الزامی است'),
        results: Yup.string().required('پر کردن این فیلد الزامی است'),
        suggests: Yup.string().required('پر کردن این فیلد الزامی است'),
        price: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            subject: '',
            details: '',
            history: '',
            actions: '',
            host: '',
            results: '',
            suggests: '',
            price: ''
        },
        enableReinitialize: true,
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
        },
    });

    return (
        <Form className='col-lg-6' onSubmit={formik.handleSubmit}>
            <Input name='title' label='عنوان:' formik={formik} />
            <SelectBox name='subject' label='موضوع:' selectOption={options} formik={formik} />
            <Textarea name='details' label='شرح:' formik={formik} />
            <Textarea name='history' label='سابقه فعالیت در منطقه:' formik={formik} />
            <Textarea name='actions' label='اقدامات انجام شده برای بهره برداری از فرصت:' formik={formik} />
            <Input name='host' label='مجری اقدامات:' formik={formik} />
            <Textarea name='results' label='نتیجه اقدامات:' formik={formik} />
            <Textarea name='suggests' label=' راهکارهای پیشنهادی جهت بهره برداری از فرصت:' formik={formik} />
            <Input name='price' label='ارزش مالی قابل بهره برداری:' formik={formik} />
            <FileUplaod
                maxNumber='1'
                images={images}
                setImages={setImages}
            />
            <Button className='btn-sm px-4' type='submit' disabled={!formik.isValid}>ثبت</Button>
        </Form>
    )
}

export default SubmitOpportunity
