import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Title from '../../../../Utils/title/Title'

const ChangePassword = () => {
    const [info, setInfo] = useState({
        password: "",
        newPassword: "",
        checkNewPassword: "",
    })

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        (info)
        if (info.newPassword !== info.checkNewPassword) {
            toast.error('تکرار رمز جدید مطابقت ندارد' , {position: 'bottom-right',className: 'foo-bar'})
        }
    }
    
    return (
        <div>
            <Title> تغییر رمز عبور </Title>
            <form onSubmit={handleFormSubmit}>
                <div className="profileItem">
                    <div className="my-4"><span>رمز فعلی :</span>
                        <input type="text" value={info.password} name="password" onChange={e => changeHandler(e)} />
                    </div>
                    <div className="my-4"><span>رمز جدید :</span>
                        <input type="text" value={info.newPassword} name="newPassword" onChange={e => changeHandler(e)} />
                    </div>
                    <div className="my-4"><span>تکرار رمز جدید :</span>
                        <input type="text" value={info.checkNewPassword} name="checkNewPassword" onChange={e => changeHandler(e)} />
                    </div>
                </div>
                <button className="btn btn-primary btn-sm px-3"> ذخیره تغییرات </button>
            </form>
        </div>
    )
}

export default ChangePassword
