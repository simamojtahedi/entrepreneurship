import React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import Input from '../../../Utils/form/Input';
import SelectBox from '../../../Utils/form/SelectBox';
import Textarea from '../../../Utils/form/Textarea';

const SubmitRequest = (props) => {
    const typeOptions = [
        {label: 'انتخاب کنید' , value: '' },
        {label: 'اقتصادی' , value: 'اقتصادی' },
        {label: 'مشاوره' , value: 'مشاوره' },
        {label: 'افتخاری' , value: 'افتخاری' },
        {label: 'مسئولیت اجتماعی' , value: 'مسئولیت اجتماعی' },
    ]

    const InnovationSchema = Yup.object().shape({
        title: Yup.string().required('پر کردن این فیلد الزامی است'),
        description: Yup.string().required('پر کردن این فیلد الزامی است'),
        methods: Yup.string().required('پر کردن این فیلد الزامی است'),
        type: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
          title: '',
          type: '',
          description: '',
          methods: '',
          time: '',
          show: false
        },
        validateOnMount: true,
        validationSchema: InnovationSchema,
        onSubmit: values => {
          
        },
    });

  return (
    <div className='innovation-submit-request animate__animated animate__fadeIn'>
        <h1>اعلام آمادگی برای حل چالش</h1>
        <Form onSubmit={formik.handleSubmit} className='col-lg-6'>
            <Input name='title' label='عنوان:' formik={formik} />
            <SelectBox name='type' label='قالب همکاری شما برای رفع چالش:' selectOption={typeOptions} formik={formik} />
            <Textarea name='description' label='شرح:' formik={formik} />
            <Textarea name='methods' label='روش های اجرایی طرح:' formik={formik} />
            <Input name='time' label='مدت زمان لازم برای حل چالش ::' formik={formik} type="number" />

            <Form.Check 
                type="checkbox"
                id="checkbox"
                label="قابل نمایش برای همه"
                {...formik.getFieldProps('show')}
            />
            <div className='d-flex justify-content-end'>
                <Button variant="primary" type="button" className='px-4 mt-4 mx-1' onClick={props.return}>
                    بازگشت
                </Button>
                <Button variant="success" type="submit" className='px-4 mt-4' disabled={!formik.isValid}>
                    ثبت
                </Button>
            </div>
        </Form>
    </div>
  )
}

export default SubmitRequest