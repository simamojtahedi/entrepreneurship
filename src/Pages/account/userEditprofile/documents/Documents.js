import React, { useState } from 'react'
import Title from '../../../../Utils/title/Title'

const Documents = () => {
    const [info, setInfo] = useState({
        picture:"",
        nationalCard:"",
        birthCertificate: ""
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
            <Title> تایید مشخصات </Title>
            <p className="mt-4">
                لطفا جهت تکمیل ثبت نام مدارک خود را حتما به صورت رنگی ارسال نمایید. :
            </p>
            <p>
                توجه داشته باشید که اسکن مدارکی که سیاه و سفید یا کپی باشند تایید نمی شوند و دوباره باید ارسال شوند.
            </p>
            <p>
                سایز و کیفیت فایل ها باید متناسب و خوانا باشد.
            </p>
            <form onSubmit={handleFormSubmit} className="mt-5">
                <div className="profileItem">
                    <div className="my-4"><span>فایل عکس :</span>
                            <input id="files" type="file" value={info.picture} name="picture" onChange={e => changeHandler(e)}  />                    
                        <p className="smallAlert">حداکثر اندازه :200 کیلوبایت </p>
                    </div>
                    <div className="my-4"><span>اسکن کارت ملی :</span>
                        <input type="file" value={info.nationalCard} name="nationalCard" onChange={e => changeHandler(e)} />
                        <p className="smallAlert">حداکثر اندازه :200 کیلوبایت </p>
                    </div>
                    <div className="my-4"><span>اسکن شناسنامه :</span>
                        <input type="file" value={info.birthCertificate} name="birthCertificate" onChange={e => changeHandler(e)} />
                        <p className="smallAlert">حداکثر اندازه :200 کیلوبایت </p>
                    </div>
                </div>
                <button className="btn btn-primary btn-sm px-3"> ذخیره تغییرات </button>
            </form>
        </div>
    )
}

export default Documents
