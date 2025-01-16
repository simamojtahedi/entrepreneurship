import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import SelectBox from '../../../Utils/form/SelectBox'
import Textarea from '../../../Utils/form/Textarea';
import FileUplaod from '../../../Utils/form/FileUplaod';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Add = () => {
    const [selectedTypeOption, setSelectedTypeOption] = useState(null);
    const [selectedHardshipOption, setSelectedHardshipOption] = useState(null);
    const [images, setImages] = useState([]);

    const typeOptions = [
      { value: 'انتخاب کنید', label: '' },
      { value: 'تشریحی', label: 'تشریحی' },
      { value: 'چند گزینه ای', label: 'چند گزینه ای' },
    ];

    const hardshipOptions = [
      { value: 'انتخاب کنید', label: '' },
      { value: 'آسان', label: 'آسان' },
      { value: 'سخت', label: 'سخت' },
    ];

    const SignInSchema = Yup.object().shape({
        type: Yup.string().required('پر کردن این فیلد الزامی است'),
        hardship: Yup.string().required('پر کردن این فیلد الزامی است'),
        question: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            type: '',
            hardship: '',
            question: '',
        },
        enableReinitialize: true,
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
          
          resetForm();
        },
    });

    return (
        <div className='mt-3'>
            <Form className='col-lg-6' onSubmit={formik.handleSubmit}>
                <SelectBox name='type' label='نوع سوال:' selectOption={typeOptions} formik={formik} />
                <SelectBox name='hardship' label='درجه سختی:' selectOption={hardshipOptions} formik={formik} />
                <Textarea name='question' label='متن سوال:' formik={formik} />
                <FileUplaod
                    maxNumber='1'
                    images={images}
                    setImages={setImages}
                />
                <Button variant="primary" className='btn-sm px-4 main-btn' type='submit' disabled={!formik.isValid}>
                    ثبت
                </Button>
            </Form>
        </div>
    )
}

export default Add
