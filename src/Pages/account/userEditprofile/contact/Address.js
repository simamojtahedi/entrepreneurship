import React, { useState } from 'react'
import Title from '../../../../Utils/title/Title'

const Address = () => {
    const [info, setInfo] = useState({
        country: "ایران",
        state: "تهران",
        city: "تهران",
        street: "",
        zipCode: ""
    })

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        (info)
        if (info.newPassword !== info.checkNewPassword) {
            // toast.error('تکرار رمز جدید مطابقت ندارد' , {position: 'bottom-right',className: 'foo-bar'})
        }
    }
    
    return (
        <div className="mt-5">
            <Title> آدرس محل سکونت </Title>
            <form onSubmit={handleFormSubmit}>
                <div className="profileItem">
                    <div className="my-4"><span>کشور :</span>
                        <div>
                            <select name="country" defaultValue="ایران" onChange={e => changeHandler(e)}>
                                <option value="iran">ایران</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-4"><span>استان :</span>
                        <div>
                            <select name="state" defaultValue="تهران" onChange={e => changeHandler(e)}>
                                <option value="tehran">تهران</option>
                                <option value="arak">اراک</option>
                                <option value="rasht" >رشت</option>
                                <option value="esfehan">اصفهان</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-4"><span>شهر :</span>
                        <div>
                            <select name="city" defaultValue="تهران" onChange={e => changeHandler(e)}>
                            <option value="tehran">تهران</option>
                                <option value="arak">اراک</option>
                                <option value="rasht" >رشت</option>
                                <option value="esfehan">اصفهان</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-4"><span>خیابان :</span>
                        <input type="text" value={info.street} name="street" onChange={e => changeHandler(e)} />
                    </div>
                    <div className="my-4"><span>کد پستی :</span>
                        <input type="text" value={info.zipCode} name="zipCode" onChange={e => changeHandler(e)} />
                        <p className="smallAlert"> مورد نیاز برای ارسال مدارک و محصولات خریداری شده از فروشگاه</p>
                    </div>
                </div>
                <button className="btn btn-primary btn-sm px-3"> ذخیره تغییرات </button>
            </form>
        </div>
    )
}

export default Address
