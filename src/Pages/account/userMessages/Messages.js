import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { messages } from '../../../data/Account/Messages'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import Message from './Message'
import NewMessage from './NewMessage'
import './style.scss'

const Messages = () => {
    const [newMessage, setNewMessage] = useState(false)
    const [messageId, setMessageId] = useState('')

    const showMessage = (id) => {
        setMessageId(id)
        setNewMessage(false)
    }

    return (
        <Wrapper pageTitle="پیام ها" >
            <div className="page-wrapper">
                <BreadCrumb>پیام ها</BreadCrumb>

                <div className="messagesContainer animate__animated animate__fadeIn">
                    <div className="sidebarNav">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span className='message_title'> پیام های مدیریت </span><span className="badge bg-danger mx-2">{messages.length}</span></Accordion.Header>
                                <Accordion.Body>
                                    {messages.map(message => (
                                        <div key={message.id} className='messageLink' onClick={() => showMessage(message.id)}>
                                            <div>
                                                <h1>{message.name}</h1>
                                                <span>{message.date}</span>
                                            </div>
                                            <p>{message.title.slice(0, 60)}</p>
                                        </div>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span className='message_title'> پیام های سیستم </span><span className="badge bg-danger mx-2">0</span></Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span className='message_title'> پیام های عمومی </span><span className="badge bg-danger mx-2">0</span></Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><span className='message_title'> صندوق دریافت </span><span className="badge bg-danger mx-2">0</span></Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><span className='message_title'> ارسال شده ها </span><span className="badge bg-danger mx-2">0</span></Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header><span className='message_title'> سطل بازیافت </span><span className="badge bg-danger mx-2">0</span></Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="messagebox">
                        <div className="col-md-12 py-3 px-5 messageButtons">
                            <button className="btn btn-success btn-sm" onClick={() => setNewMessage(true)}> ارسال پیام جدید </button>
                        </div>
                        
                        {newMessage? 
                            <NewMessage /> : 
                            <Message data={messages} id={messageId} />
                        }
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Messages
