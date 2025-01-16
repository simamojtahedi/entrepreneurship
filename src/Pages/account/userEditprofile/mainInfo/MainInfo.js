import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import Title from '../../../../Utils/title/Title'
import '../style.scss'

const MainInfo = () => {

    const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        fatherName: "",
        rncCode: "",
        birthday: "",
        birthMonth: "",
        birthYear: "",
        gender: "",
        marital: "",
        education: "",
        military: ""
    })

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        (info)
    }

    return (
        <div className='p-3'>
            <div>
                <Title> وضعیت کلی </Title>
                <div className="profileItem">
                    <div className="my-4"><span>نام کاربری:</span><h6>Sima</h6></div>
                    <div className="my-4"><span>نام :</span><h6>سیما مجتهدی</h6></div>
                    <div className="my-4"><span>وضعیت حساب:</span><h6>تایید نشده </h6></div>
                    <div className="my-4"><span>تایید دو مرحله ای:</span><h6>غیرفعال</h6></div>
                </div>
            </div>
            <div className="mt-5">
                <Title> مشخصات کاربری </Title>
                <p>لطفا جهت تکمیل ثبت نام فرم زیر را به صورت فارسی پر کنید :</p>
                <Form onSubmit={handleFormSubmit}>
                    <div className="profileItem">
                        <div className="my-4"><span>نام :</span>
                            <input type="text" value={info.firstname} name="firstname" onChange={e => changeHandler(e)} />
                        </div>
                        <div className="my-4"><span>نام خانوادگی :</span>
                            <input type="text" value={info.lastname} name="lastname" onChange={e => changeHandler(e)} />
                        </div>
                        <div className="my-4"><span>نام پدر :</span>
                            <input type="text" value={info.fatherName} name="fatherName" onChange={e => changeHandler(e)} />
                        </div>
                        <div className="my-4"><span>شماره شناسنامه :</span>
                            <input type="text" value={info.rncCode} name="rncCode" onChange={e => changeHandler(e)} />
                        </div>
                        <div className="my-4"><span>تاریخ تولد :</span>
                            <div>
                                <input type="number" value={info.birthday} name="birthday" onChange={e => changeHandler(e)} />
                                <input type="number" value={info.birthMonth} name="birthMonth" onChange={e => changeHandler(e)} />
                                <input type="number" value={info.birthYear} name="birthYear" onChange={e => changeHandler(e)} />
                            </div>
                        </div>
                        <div className="my-4"><span>جنسیت :</span>
                            <Form.Check inline label="زن" name="gender" type="radio" value='woman' onChange={e => changeHandler(e)} />
                            <Form.Check inline label="مرد" name="gender" type="radio" value='man' onChange={e => changeHandler(e)} />
                        </div>
                        <div className="my-4"><span>وضعیت تاهل :</span>
                            <Form.Check inline label="مجرد" name="marital" type="radio" value='single' onChange={e => changeHandler(e)} />
                            <Form.Check inline label="متاهل" name="marital" type="radio" value='married' onChange={e => changeHandler(e)} />
                        </div>                    
                        <div className="my-4"><span>تحصیلات :</span>
                            <div>
                                <select name="education" defaultValue="3" onChange={e => changeHandler(e)}>
                                    <option value="1">زیر دیپلم</option>
                                    <option value="2">دیپلم</option>
                                    <option value="3" >فوق دیپلم</option>
                                    <option value="4">لیسانس</option>
                                </select>
                            </div>
                        </div>
                        <div className="my-4"><span>وضعیت نظام وظیفه :</span>
                            <div>
                                <select name="military" defaultValue="4" onChange={e => changeHandler(e)}>
                                    <option value="1" >مونث</option>
                                    <option value="2">معافیت تحصیلی</option>
                                    <option value="3">معافیت پزشکی</option>
                                    <option value="4">پایان خدمت</option>
                                </select>
                            </div> 
                            <p className="smallAlert">تعیین وضعیت نظام وظیفه برای آقایان جهت تشکیل کمپهای علمی خارج کشور الزامی است.</p>                   
                        </div>
                    </div>
                    <button className="btn btn-primary btn-sm px-3"> ذخیره تغییرات </button>
                </Form>
            </div>
        </div>
    )
}

export default MainInfo
