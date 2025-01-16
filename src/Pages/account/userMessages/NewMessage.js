import React from 'react'
import './style.scss'

const NewMessage = () => {
    return (
        <div className="newMessageBox">
            <h6 className="my-2">ارسال پیام جدید</h6>
            <form>
                <div className="newMessageItem">
                    <input type="text" placeholder=" دریافت کننده " />
                </div>
                <div className="newMessageItem">
                    <input type="text" placeholder=" موضوع پیام " />
                </div>
                <div className="newMessageItem">
                    <textarea type="text" placeholder=" متن پیام " />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-primary"> ارسال </button>
                </div>
            </form>
        </div>
    )
}

export default NewMessage
