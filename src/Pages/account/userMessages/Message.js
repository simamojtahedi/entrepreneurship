import React, { useEffect, useState } from 'react'
import './style.scss'

const Message = (props) => {
    const [message, setMessage] = useState({})

    useEffect(() => {
        const messageData = props.data.filter(item => item.id === props.id)[0]
        setMessage(messageData)
    }, [props.id])

    return (
        <div className="messageContent ">
            {message ? 
                <>
                    <h6> {message.title} </h6>
                    <span >{message.name}</span>
                    <p className="mt-4">
                        {message.content}
                    </p>
                    <div>
                        <span>{message.date}</span>
                    </div>
                </>
            :
                <h6 className='text-center'>مرکز مدیریت و ارسال پیام</h6>
            }
        </div>
    )
}

export default Message
