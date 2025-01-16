import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import Switch from '../../../../../Utils/switchButton/SwitchButton';
import Input from '../../../../../Utils/form/Input';
import Switch from '../../../../../Utils/switchButton/SwitchButton';
import SelectBox from '../../../../../Utils/form/SelectBox';
import SelectDate from '../../../../../Utils/form/SelectDate'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const UserAccount = (props) => {
    const [block, setBlock] = useState(false);
    const [birthDate, setBirthDate] = useState();

    const eduOptions = [
        {label: 'فوق دیپلم' , value: '1' },
        {label: 'لیسانس' , value: '2' },
        {label: 'فوق لیسانس' , value: '3' },
    ];

    const militaryOptions = [
        {label: 'مونث' , value: '1' },
        {label: 'پایان خدمت' , value: '2' },
        {label: 'در حال انجام' , value: '3' },
    ];

    const SignInSchema = Yup.object().shape({
        username: Yup.string().required('پر کردن این فیلد الزامی است'),
        alias: Yup.string().required('پر کردن این فیلد الزامی است'),
        meli_code: Yup.string().required('پر کردن این فیلد الزامی است'),
        firstname: Yup.string().required('پر کردن این فیلد الزامی است'),
        lastname: Yup.string().required('پر کردن این فیلد الزامی است'),
        father: Yup.string().required('پر کردن این فیلد الزامی است'),
        shenasname: Yup.string().required('پر کردن این فیلد الزامی است'),
        firstname: Yup.string().required('پر کردن این فیلد الزامی است'),
        gender: Yup.string().required('پر کردن این فیلد الزامی است'),
        mariage: Yup.string().required('پر کردن این فیلد الزامی است'),
        edu: Yup.string().required('پر کردن این فیلد الزامی است'),
        sarbazi: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            alias: '',
            meli_code: '',
            firstname: '',
            lastname: '',
            father: '',
            shenasname: '',
            firstname: '',
            gender: '',
            mariage: '',
            edu: '',
            sarbazi: '',
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
            resetForm();
        },
    });

    return (
        <Form className='col-lg-6' onSubmit={formik.handleSubmit} >
            <Input name='username' label='نام کاربری:' formik={formik} />
            <Input name='alias' label='نام مستعار:' formik={formik} />
            <Input name='meli_code' label='کد ملی:' formik={formik} />
            <Form.Group as={Row} className="mb-3" controlId="meli_code">
                <Form.Label column sm={4}> بلاک </Form.Label>
                <Col sm={8}> 
                    <Switch
                        id={'block'}
                        isOn={block}
                        handleToggle={() => setBlock(!block)}
                    /> 
                </Col>
            </Form.Group>
            <Input name='firstname' label='نام:' formik={formik} />
            <Input name='lastname' label='نام خانوادگی:' formik={formik} />
            <Input name='father' label='نام پدر:' formik={formik} />
            <Input name='shenasname' label='شماره شناسنامه:' formik={formik} />
            <Input name='firstname' label='نام:' formik={formik} />
            <SelectDate controlId='birth_date' label='تاریخ تولد:' date={birthDate} setDateState={setBirthDate} />
            
            <Form.Group as={Row} className="mb-3" controlId="gender">
                <Form.Label column sm={4}> جنسیت </Form.Label>
                <Col sm={8}> 
                    <Form.Check type="radio" label="مونث" name="gender" id="female" />
                    <Form.Check type="radio" label="مذکر" name="gender" id="male" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="mariage">
                <Form.Label column sm={4}> تاهل </Form.Label>
                <Col sm={8}> 
                    <Form.Check type="radio" label="مجرد" name="mariage" id="single" /> 
                    <Form.Check type="radio" label="متاهل" name="mariage" id="married" />
                </Col>
            </Form.Group>
            <SelectBox name='edu' label='تحصیلات:' selectOption={eduOptions} formik={formik} />
            <SelectBox name='sarbazi' label='وضعیت نظام وظیفه:' selectOption={militaryOptions} formik={formik} />
            <Button className='btn-sm px-3' type='submit' disabled={!formik.isValid}>ثبت</Button>
        </Form>
    )
}

export default UserAccount
