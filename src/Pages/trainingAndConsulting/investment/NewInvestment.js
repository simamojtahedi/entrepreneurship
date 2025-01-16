import React from 'react'
import { useFormik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import Input from '../../../Utils/form/Input'
import SelectBox from '../../../Utils/form/SelectBox';
import Textarea from '../../../Utils/form/Textarea'
import * as Yup from 'yup'

const NewInvestment = () => {
    const groupingOptions = [
        { value: 'سرمایه نقدی', label: 'سرمایه نقدی' },
        { value: 'زمین کشاورزی', label: 'زمین کشاورزی' },
    ];

    const ownershipOptions = [
        { value: 'شخصی', label: 'شخصی' },
        { value: 'شراکتی', label: 'شراکتی' },
    ];
    

    const SignInSchema = Yup.object().shape({
        title: Yup.string().required('پر کردن این فیلد الزامی است'),
        grouping: Yup.string().required('پر کردن این فیلد الزامی است'),
        ownership: Yup.string().required('پر کردن این فیلد الزامی است'),
        details: Yup.string().required('پر کردن این فیلد الزامی است'),
        methods: Yup.string().required('پر کردن این فیلد الزامی است'),
        profit: Yup.string().required('پر کردن این فیلد الزامی است'),
        warranty: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            title: "",
            grouping: "cash",
            ownership: "personal",
            ownershipPercent : "",
            details: "",
            methods: "",
            profit: "",
            warranty: "",

        },
        validationSchema: SignInSchema,
        onSubmit: values => {
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className='col-lg-6'>
            <div className="newInvestment">
                <Input name='title' label='عنوان:' formik={formik} />
                <SelectBox name='grouping' label='دسته بندی:' selectOption={groupingOptions} formik={formik} />
                <SelectBox name='ownership' label='نوع مالکیت:' selectOption={ownershipOptions} formik={formik} />
                
                <div className="investItem">
                    <label>پیشنهاد اجرایی : </label>
                    <div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="singleInvest" id="singleInvest" {...formik.getFieldProps('suggestion')} />
                            <label className="form-check-label" htmlFor="singleInvest">
                                سرمایه گذاری انفرادی
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="shareInvest" id="shareInvest" {...formik.getFieldProps('suggestion')} />
                            <label className="form-check-label" htmlFor="shareInvest">
                                مشارکت با صاحب ایده
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="clubInvest" id="clubInvest" {...formik.getFieldProps('suggestion')} />
                            <label className="form-check-label" htmlFor="clubInvest">
                                سرمایه گذاری در صندوق نوآوری باشگاه
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="otherInvets" id="otherInvets" {...formik.getFieldProps('suggestion')} />
                            <label className="form-check-label" htmlFor="otherInvets">
                                سایر
                            </label>
                        </div>
                    </div>
                </div>
                <Textarea name='details' label='شرح تفصیلی:' formik={formik} />
                <Textarea name='methods' label='روش های اجرایی طرح:' formik={formik} />
                <Input name='profit' label='میزان سود سالانه مورد انتظار:' formik={formik} text='ریال' />
                <Textarea name='warranty' label='حداقل ضمانت مورد نیاز:' formik={formik} text='حداقل 5 مورد' />

                <div className="investItem">
                    <label>علاقمندی به طرح های : </label>
                    <div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="Industrial" id="Industrial" {...formik.getFieldProps('interests')} />
                            <label className="form-check-label" htmlFor="Industrial">
                                صنعتی
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="agricultural" id="agricultural" {...formik.getFieldProps('interests')}/>
                            <label className="form-check-label" htmlFor="agricultural">
                                کشاورزی
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="service" id="service" {...formik.getFieldProps('interests')}/>
                            <label className="form-check-label" htmlFor="service">
                                خدماتی
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="allinterest" id="allinterest" {...formik.getFieldProps('interests')}/>
                            <label className="form-check-label" htmlFor="allinterest">
                                همه موارد
                            </label>
                        </div>
                    </div>
                </div>
                <div className="investItem">
                    <label>پیوست فایل : </label>
                    <input type="file" name="file" {...formik.getFieldProps('file')} />
                </div>
                <Button className='btn-sm px-3 btn-success' type='submit' disabled={!formik.isValid}>ارسال</Button>
            </div>
        </Form>
)
}

export default NewInvestment
