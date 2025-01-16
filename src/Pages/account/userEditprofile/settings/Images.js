import React, { useState } from 'react'
import Title from '../../../../Utils/title/Title'

const Images = () => {
    const [info, setInfo] = useState({
        avatar: "",
        coverPicture: ""
    })

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        (info)
    }

    return (
        <div>
            <Title>تنظیمات ظاهری</Title>
           <form onSubmit={handleFormSubmit}>
                <div className="profileItem">
                    <div className="my-4"><span>آواتار :</span>
                            <input id="files" type="file" value={info.avatar} name="avatar" onChange={e => changeHandler(e)}  />                    
                        <p className="smallAlert">حداکثر اندازه :200 کیلوبایت </p>
                    </div>
                    <div className="my-4"><span>کاور پروفایل :</span>
                        <input type="file" value={info.coverPicture} name="coverPicture" onChange={e => changeHandler(e)} />
                        <p className="smallAlert">حداکثر اندازه :200 کیلوبایت </p>
                    </div>
                </div>
                <button className="btn btn-primary btn-sm px-3"> ذخیره تغییرات </button>
            </form>
        </div>
    )
}

export default Images
