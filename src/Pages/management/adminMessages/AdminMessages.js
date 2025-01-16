import React, { useState } from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import MainTable from '../../../Utils/table/MainTable'
import { Button } from 'react-bootstrap'
import Message from './Message'

const AdminMessages = () => {
    const [messageData, setMessageData] = useState({})
    const [show, setShow] = useState(false)
    const api = [ 
        {  code: '1',  sender: 'مدیر سامانه',  receiver: 'پشتیبان',  subject: 'تست',  message: 'باسلام اکیدا توصیه میکنیم که با کامپیوتر متصل بشین چون آموزش زنده روی گوشی خیلی معنا ندارد. برای ورود به کلاس زنده از طریق کامپیوتر نیازی به نرم افزار خاص ندارید فقط باید روی سیستم تون فلش پلیر نصب باشه که معمولا نصبه ولی حتما قبل از ساعت درسی چک کنید. موفق باشید', date: '1400/1/08 - 12:21:19', status: 'خوانده شده' },
        {  code: '2',  sender: 'مدیر سامانه',  receiver: 'پشتیبان',  subject: 'عنوان متفاوت',  message: 'باسلام اکیدا توصیه میکنیم که با کامپیوتر متصل بشین چون آموزش زنده روی گوشی خیلی معنا ندارد. برای ورود به کلاس زنده از طریق کامپیوتر نیازی به نرم افزار خاص ندارید فقط باید روی سیستم تون فلش پلیر نصب باشه که معمولا نصبه ولی حتما قبل از ساعت درسی چک کنید. موفق باشید', date: '1400/1/08 - 12:29:19', status: 'خوانده نشده' },
    ]

    const data = api.map(v => ({...v, actions: 
        <div>
            <Button className='btn-success btn-sm px-3' onClick={() => openMessageHandler(v)}>مشاهده</Button>
            <Button className='mx-1 btn-sm px-3 btn-danger' >حذف</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'موضوع', accessor: 'subject' },
        { Header: 'فرستنده', accessor: 'sender' },
        { Header: 'گیرنده', accessor: 'receiver' },
        { Header: 'زمان', accessor: 'date' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    const openMessageHandler = (data) => {
        setMessageData(data)
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <Wrapper pageTitle="مدیریت پیام‌ها" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت پیام‌ها </BreadCrumb>
                <div className='animate__animated animate__fadeIn'>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
            { <Message show={show} handleClose={handleClose} data={messageData} /> }
        </Wrapper>
    )
}

export default AdminMessages
