
import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import { tickets } from '../../../data/ticket/AccountData'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import NewQuestion from './NewQuestion'
import './style.scss'
import Ticket from './Ticket'

const UserTicket = () => {
    const [show, setShow] = useState(false);

    const close = () => setShow(false);

    return (
        <Wrapper pageTitle="ارتباط با پشتیبانی">
            <div className="page-wrapper">
                <BreadCrumb> ارتباط با پشتیبانی </BreadCrumb>
                <div className="ticketTabs mt-5">
                    <Tabs defaultActiveKey="newQuestion" id="ticket-tab">
                        <Tab eventKey="newQuestion" title="ثبت پرسش" className='animate__animated animate__fadeIn'>
                            <NewQuestion />
                        </Tab>
                        <Tab eventKey="followup" title="پیگیری ایده ثبت شده" className='animate__animated animate__fadeIn'>
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th>کد</th>
                                        <th>عنوان</th>
                                        <th>تاریخ ثبت</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets.map( item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.date} تومان</td>
                                            <td className="d-grid">
                                                <button type="button" className=" btn btn-sm btn-warning" onClick={() => setShow(true)}>پیگیری</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <Ticket show={show} close={close} />
        </Wrapper>
    )
}

export default UserTicket
