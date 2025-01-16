import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import Input from '../../../Utils/form/Input'
import SelectBox from '../../../Utils/form/SelectBox';
import Textarea from '../../../Utils/form/Textarea'
import * as Yup from 'yup'
import './style.scss'
import SelectDate from '../../../Utils/form/SelectDate';

const NewIdea = () => {
    const [registerDate, setRegisterDate] = useState();
    const groupingOptions = [
        { value: 'صنعت', label: 'صنعت' },
        { value: 'کشاورزی', label: 'کشاورزی' },
        { value: 'خدمات', label: 'خدمات'}
    ];

    const submitAsOptions = [
        { value: 'صنعتی', label: 'صنعتی' },
        { value: 'اختراع', label: 'اختراع' },
        { value: 'سایر', label: 'سایر'}
    ];
    
    const SignInSchema = Yup.object().shape({
        title: Yup.string().required('پر کردن این فیلد الزامی است'),
        grouping: Yup.string().required('پر کردن این فیلد الزامی است'),
        suggestion: Yup.string().required('پر کردن این فیلد الزامی است'),
        summary: Yup.string().required('پر کردن این فیلد الزامی است'),
        details: Yup.string().required('پر کردن این فیلد الزامی است'),
        profits: Yup.string().required('پر کردن این فیلد الزامی است'),
        mainInvestment: Yup.string().required('پر کردن این فیلد الزامی است'),
        workingInvestment: Yup.string().required('پر کردن این فیلد الزامی است'),
        annualProfit: Yup.string().required('پر کردن این فیلد الزامی است'),
        investmentReturn: Yup.string().required('پر کردن این فیلد الزامی است'),
        condition: Yup.string().required('پر کردن این فیلد الزامی است'),
        registerDate: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
            title:'',
            grouping:'',
            suggestion:'',
            summary: '',
            details: '',
            profits: '',
            mainInvestment: '',
            workingInvestment: '',
            annualProfit: '',
            investmentReturn: '',
            condition: '',
            registerDate
        },
        enableReinitialize: true,
        validationSchema: SignInSchema,
        onSubmit: values => {
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className='col-lg-6'>
            <div className='newidea'>
                <Input name='title' label='عنوان ایده یا طرح:' formik={formik} />
                <SelectBox name='grouping' label='دسته بندی:' selectOption={groupingOptions} formik={formik} />
                <SelectBox name='submitAs' label='ثبت به عنوان:' selectOption={submitAsOptions} formik={formik} />
                <SelectDate controlId='register' label='تاریخ ثبت:' date={registerDate} setDateState={setRegisterDate} />

                <div className="investItem">
                    <label>پیشنهاد اجرایی : </label>
                    <div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="singleInvest" id="singleInvest" {...formik.getFieldProps('suggestion')} />
                            <label className="form-check-label" htmlFor="singleInvest">
                                فروش    
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="shareInvest" id="shareInvest" {...formik.getFieldProps('suggestion')} />
                            <label className="form-check-label" htmlFor="shareInvest">
                                مشارکت  
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="clubInvest" id="clubInvest" {...formik.getFieldProps('suggestion')} />
                            <label className="form-check-label" htmlFor="clubInvest">
                                سرمایه گذاری توسط صاحب ایده 
                            </label>
                        </div>
                    </div>
                </div>
                
                <Textarea name='summary' label='شرح خلاصه:' formik={formik} />
                <Textarea name='details' label='شرح تفصیلی:' formik={formik} text='حداقل 200 کلمه' />
                <Textarea name='profits' label='منافع اجرایی طرح:' formik={formik} text='حداقل 7 مورد' />
                <Input name='mainInvestment' label='میزان سرمایه گذاری ثابت لازم :' formik={formik} text='ریال' />
                <Input name='workingInvestment' label='میزان سرمایه گذاری در گردش لازم :' formik={formik} text='ریال' />
                <Input name='annualProfit' label='سود سالانه :' formik={formik} text='ریال' />
                <Input name='investmentReturn' label='نرخ بازگشت سرمایه :' formik={formik} />

                <div className="investItem">
                    <label>وضعیت ایده : </label>
                    <div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="Industrial" id="Industrial" {...formik.getFieldProps('condition')} />
                            <label className="form-check-label" htmlFor="Industrial">
                                مراحل اولیه
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="agricultural" id="agricultural" {...formik.getFieldProps('condition')}/>
                            <label className="form-check-label" htmlFor="agricultural">
                            نیاز به R&D
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="service" id="service" {...formik.getFieldProps('condition')}/>
                            <label className="form-check-label" htmlFor="service">
                                نیاز به سرمایه
                            </label>
                        </div>
                        <div className="form-checkbox">
                            <input className="form-check-input" type="radio" value="allinterest" id="allinterest" {...formik.getFieldProps('condition')}/>
                            <label className="form-check-label" htmlFor="allinterest">
                                100% آماده اجرا
                            </label>
                        </div>
                    </div>
                </div>
         
                <div className="investItem mt-3">
                    <label>پیوست فایل : </label>
                    <input type="file" name="file" {...formik.getFieldProps('file')} />
                    {/* <div>
                        <span>حداکثر اندازه :2 مگابایت</span><br />
                        <span>ABW .BZ .BZ2 .DOC .DOCX .ODP .ODS .ODT .PDF .PPT .RAR .RTF .TAR .VSD .XLS .XLSX .ZIP .7Z</span>
                    </div>  */}
                </div>
                <Button className='btn-sm px-3 mt-3 btn-success' type='submit' disabled={!formik.isValid}>ارسال</Button>
            </div>
        </Form>
    )
}

export default NewIdea
