import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Input from '../../../Utils/form/Input'
import SelectBox from '../../../Utils/form/SelectBox'
import SelectDate from '../../../Utils/form/SelectDate'
import MainModal from '../../../Utils/modal/MainModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const AddCenter = (props) => {
    const [registerDate, setRegisterDate] = useState();

    const statusOptions = [
        { value: 'در حال بررسی', label: 'در حال بررسی' },
        { value: 'تایید شده', label: 'تایید شده' },
        { value: 'رد شده', label: 'رد شده' },
    ];

    const consultorOptions = [
        { value: 'رضا فراهانی', label: 'رضا فراهانی' },
        { value: 'لیونل مسی', label: 'لیونل مسی' },
    ];

    const clinicOptions = [
        { value: 'کلینیک مدیریت', label: 'کلینیک مدیریت' },
        { value: 'کلینیک امید', label: 'کلینیک امید' },
        { value: 'کلینیک تعاون', label: 'کلینیک تعاون' },
    ];

    const SignInSchema = Yup.object().shape({
        name: Yup.string().required('پر کردن این فیلد الزامی است'),
        type: Yup.string().required('پر کردن این فیلد الزامی است'),
        houres: Yup.string().required('پر کردن این فیلد الزامی است'),
        cash: Yup.string().required('پر کردن این فیلد الزامی است'),
        credit: Yup.string().required('پر کردن این فیلد الزامی است'),
        rate: Yup.string().required('پر کردن این فیلد الزامی است'),
        status: Yup.string().required('پر کردن این فیلد الزامی است'),
        consultor: Yup.string().required('پر کردن این فیلد الزامی است'),
        clinic: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            houres: '',
            cash: '',
            credit: '',
            rate: '',
            status: '',
            consultor: '',
            clinic: ''
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
        <MainModal show={props.addCenter} handleClose={() => props.setAddCenter(false)} title='ایجاد'>
            <Form onSubmit={formik.handleSubmit}>
                <Input name='name' label='نام مرکز:' formik={formik} />
                <Input name='type' label='نوع:' formik={formik} text=' میتواند شامل مجازی٬ کارگاهی٬ حضوری و غیره باشد' />
                <Input name='houres' label='مدت مشاوره:' formik={formik} text='دقیقه' />
                <SelectDate controlId='register' label='مهلت ثبت نام' date={registerDate} setDateState={setRegisterDate} />
                <Input name='cash' label='مبلغ نقدی:' formik={formik} text='ریال' />
                <Input name='credit' label='مبلغ اعتبار:' formik={formik} text='عدد صفر به معنای بدون بورسیه می باشد' />
                <Input name='rate' label='امتیاز:' formik={formik} />
                <SelectBox name='status' label='وضعیت:' selectOption={statusOptions} formik={formik} />
                <SelectBox name='consultor' label='نام مشاور:' selectOption={consultorOptions} formik={formik} />
                <SelectBox name='clinic' label='کلینیک:' selectOption={clinicOptions} formik={formik} />
                <Button className='btn-sm px-3' type='submit' disabled={!formik.isValid}>ثبت</Button>
            </Form>
        </MainModal>
    )
}

export default AddCenter
