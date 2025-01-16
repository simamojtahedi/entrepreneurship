import React, { useState } from 'react'
import Title from '../../../../Utils/title/Title'

const Text = () => {
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
        <div className="mt-5">
            <Title>متن</Title>
           <form onSubmit={handleFormSubmit}>
                <div className="profileItem">
                    <div className="my-4">
                        <textarea id="text" type="text" value={info.avatar} name="avatar" onChange={e => changeHandler(e)}  />                    
                    </div>
                </div>
                <button className="btn btn-primary btn-sm px-3"> ارسال </button>
            </form>
        </div>
    )
}

export default Text
