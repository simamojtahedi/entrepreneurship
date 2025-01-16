import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import DatePicker from 'react-multi-date-picker'
import Input from '../../../Utils/form/Input'
import SelectBox from '../../../Utils/form/SelectBox'
import SelectDate from '../../../Utils/form/SelectDate'
import MainModal from '../../../Utils/modal/MainModal'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useFormik } from 'formik'
import * as Yup from 'yup'

const EditTour = (props) => {
    const [data] = useState(props.data);
    const [status, setStatus] = useState(null);
    const [registerDate, setRegisterDate] = useState();

    const statusOptions = [
        { value: 'در حال بررسی', label: 'در حال بررسی' },
        { value: 'تایید شده', label: 'تایید شده' },
        { value: 'رد شده', label: 'رد شده' },
    ];

    const [test, settest] = useState({ 
        value: data.tour_date,
        onChange: (date) => (date.format()),
        calendar: persian,
        locale: persian_fa,
        calendarPosition: "bottom-right"
    });

    const SignInSchema = Yup.object().shape({
        name: Yup.string().required('پر کردن این فیلد الزامی است'),
        origin: Yup.string().required('پر کردن این فیلد الزامی است'),
        destination: Yup.string().required('پر کردن این فیلد الزامی است'),
        tour_duration: Yup.string().required('پر کردن این فیلد الزامی است'),
        cash: Yup.string().required('پر کردن این فیلد الزامی است'),
        credit: Yup.string().required('پر کردن این فیلد الزامی است'),
        rate: Yup.string().required('پر کردن این فیلد الزامی است'),
        level: Yup.string().required('پر کردن این فیلد الزامی است'),
        status: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            origin: '',
            destination: '',
            tour_duration: '',
            cash: '',
            credit: '',
            rate: '',
            level: '',
            status: '',
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
            resetForm();
        },
    });

    return (
        <MainModal show={props.editCenter} handleClose={() => props.setEditCenter(false)} title='ویرایش'>
            <Form onSubmit={formik.handleSubmit}>
                <Input name='name' label='نام تور' formik={formik} />
                <Input name='origin' label='مبدا' formik={formik} />
                <Input name='destination' label='مقصد' formik={formik} />
                <SelectDate controlId='register' label='مهلت ثبت نام:' date={registerDate} setDateState={setRegisterDate} />
                {/* <DatePicker {...test} onPropsChange={settest} />  */}
                <Input name='tour_duration' label='مدت اقامت' formik={formik} text='روز' />
                <Input name='cash' label='مبلغ نقدی' formik={formik} text='ریال' />
                <Input name='credit' label='مبلغ اعتبار' formik={formik} text='عدد صفر به معنای بدون بورسیه می باشد' />
                <Input name='rate' label='امتیاز' formik={formik}  />
                <Input name='level' label='سطح' formik={formik}  />
                <SelectBox name='status' label='وضعیت:' selectOption={statusOptions} formik={formik} />
                <Button className='btn-sm px-3' type='submit' disabled={!formik.isValid}>ویرایش</Button>
            </Form>
        </MainModal>
    )
}

export default EditTour
