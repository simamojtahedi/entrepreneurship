import React, { useState } from 'react'
import Title from '../../../../Utils/title/Title'

const ContactInfo = () => {
    const [contact, setContact] = useState({
        email: "",
        phoneNumber: "",
        homeNumber: "",
    })

    const changeHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        (contact)
    }

    return (
        <div>
            <Title> اطلاع رسانی </Title>
            <form onSubmit={handleFormSubmit}>
                <div className="profileItem">
                    <div className="my-4"><span>ایمیل :</span>
                        <input type="email" value={contact.email} name="email" onChange={e => changeHandler(e)} />
                        <p className="smallAlert"> مورد نیاز برای استفاده از بخش فراموشی رمز عبور </p>
                    </div>
                    <div className="my-4"><span>شماره همراه :</span>
                        <input type="text" value={contact.phoneNumber} name="phoneNumber" onChange={e => changeHandler(e)} />
                        <p className="smallAlert"> مورد نیاز برای استفاده از بخش فراموشی رمز عبور٬ اعلام تراکنش‌ها و اطلاعیه‌ها </p>
                    </div>
                    <div className="my-4"><span>شماره تلفن ثابت :</span>
                        <input type="text" value={contact.homeNumber} name="homeNumber" onChange={e => changeHandler(e)} />
                        <p className="smallAlert"> شماره تلفن را همراه با پیش شماره شهر وارد کنید </p>
                    </div>
                </div>
                <button className="btn btn-primary btn-sm px-3"> ذخیره تغییرات </button>
            </form>
        </div>
    )
}

export default ContactInfo
