import React from 'react'
import { Form, Button } from 'react-bootstrap'
import SelectBox from '../../../../../Utils/form/SelectBox';
import Input from '../../../../../Utils/form/Input';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const UserConatct = () => {
    const countryOptions = [
        {label: 'ایران' , value: '1' },
    ];

    const SignInSchema = Yup.object().shape({
        email: Yup.string().required('پر کردن این فیلد الزامی است'),
        phone_number: Yup.string().required('پر کردن این فیلد الزامی است'),
        number: Yup.string().required('پر کردن این فیلد الزامی است'),
        country: Yup.string().required('پر کردن این فیلد الزامی است'),
        province: Yup.string().required('پر کردن این فیلد الزامی است'),
        city: Yup.string().required('پر کردن این فیلد الزامی است'),
        street: Yup.string().required('پر کردن این فیلد الزامی است'),
        postCode: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            phone_number: '',
            number: '',
            country: '',
            province: '',
            city: '',
            street: '',
            postCode: ''
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
            <Input name='email' label='ایمیل:' formik={formik} type='email' />
            <Input name='phone_number' label='شماره همراه:' formik={formik} />
            <Input name='number' label='شماره تلفن ثابت:' formik={formik} />
            <SelectBox name='country' label='کشور:' selectOption={countryOptions} formik={formik} />
            <SelectBox name='province' label='استان:' selectOption={countryOptions} formik={formik} />
            <SelectBox name='city' label='شهر:' selectOption={countryOptions} formik={formik} />
            <Input name='street' label='خیابان:' formik={formik} />
            <Input name='postCode' label='کد پستی:' formik={formik} />
            <Button className='btn-sm px-4' type='submit' disabled={!formik.isValid}>ثبت تغییرات</Button>
        </Form>
    )
}

export default UserConatct
