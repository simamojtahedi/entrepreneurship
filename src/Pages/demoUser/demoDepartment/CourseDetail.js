import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import MainModal from '../../../Utils/modal/MainModal';
import Input from '../../../Utils/form/Input'
import SelectBox from '../../../Utils/form/SelectBox';
import SelectDate from '../../../Utils/form/SelectDate'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const CourseDetail = (props) => {
    const [registerDate, setRegisterDate] = useState();
    const [startDate, setStartDate] = useState();

    const options = [
        { value: 'در حال ثبت نام', label: 'در حال ثبت نام' },
        { value: 'اتمام مهلت', label: 'اتمام مهلت' },
        { value: 'تکمیل شده', label: 'تکمیل شده' },
    ];

    const SignInSchema = Yup.object().shape({
        name: Yup.string().required('پر کردن این فیلد الزامی است'),
        id: Yup.string().required('پر کردن این فیلد الزامی است'),
        type: Yup.string().required('پر کردن این فیلد الزامی است'),
        time: Yup.string().required('پر کردن این فیلد الزامی است'),
        cash: Yup.string().required('پر کردن این فیلد الزامی است'),
        credit: Yup.string().required('پر کردن این فیلد الزامی است'),
        base_points: Yup.string().required('پر کردن این فیلد الزامی است'),
        points: Yup.string().required('پر کردن این فیلد الزامی است'),
        certificate_cash: Yup.string().required('پر کردن این فیلد الزامی است'),
        certificate_credit: Yup.string().required('پر کردن این فیلد الزامی است'),
        certificate_points: Yup.string().required('پر کردن این فیلد الزامی است'),
        status: Yup.string().required('پر کردن این فیلد الزامی است'),
        teacher: Yup.string().required('پر کردن این فیلد الزامی است'),
        presentor: Yup.string().required('پر کردن این فیلد الزامی است'),
        department: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            id: '',
            type: '',
            time: '',
            cash: '',
            credit: '',
            base_points: '',
            points: '',
            certificate_cash: '',
            certificate_credit: '',
            certificate_points: '',
            status: '',
            teacher: '',
            presentor: '',
            department: '',
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
            resetForm();
        },
    });

    return (
        <MainModal show={props.show} handleClose={props.handleClose} title='ویرایش دوره'>
            <Form onSubmit={formik.handleSubmit}>
                <Input name='name' label='نام دوره:' formik={formik} />
                <Input name='id' label='شناسه دوره:' formik={formik} text='غیرقابل تغییر و بدون تکرار و بدون خط تیره یا نقطه' />
                <SelectBox name='type' label='نوع دوره:' selectOption={options} formik={formik} />
                <Input name='time' label='ساعات دوره:' formik={formik} type='number' text='ساعت' />
                <SelectDate controlId='register' label='مهلت ثبت نام:' date={registerDate} setDateState={setRegisterDate} />
                <SelectDate controlId='start_date' label='تاریخ شروع:' date={startDate} setDateState={setStartDate} />
                <Input name='cash' label='مبلغ نقدی:' formik={formik} text='ریال' />
                <Input name='credit' label='مبلغ بورسیه:' formik={formik} text='عدد صفر به معنای بدون بورسیه می باشد' />
                <Input name='base_points' label='حداقل امتیاز مورد نیاز:' formik={formik} text='تعیین سطح دوره براساس امتیاز مورد نیاز می باشد' />
                <Input name='points' label='امتیاز:' formik={formik} />
                <Input name='certificate_cash' label='مبلغ صدور مدرک:' formik={formik} text='ریال' />
                <Input name='certificate_credit' label='اعتبار صدور مدرک:' formik={formik} />
                <Input name='certificate_points' label='امتیاز صدور مدرک:' formik={formik} />
                <SelectBox name='status' label='وضعیت:' selectOption={options} formik={formik} />
                <SelectBox name='teacher' label='نام مدرس:' selectOption={options} formik={formik} />
                <SelectBox name='presentor' label='ارائه دهنده:' selectOption={options} formik={formik} />
                <SelectBox name='department' label='دپارتمان:' selectOption={options} formik={formik} />
                <Button className='btn-sm px-3' type='submit' disabled={!formik.isValid}>ثبت</Button>
            </Form>
        </MainModal>
    )
}

export default CourseDetail
