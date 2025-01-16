import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import OperatorSupportAction from '../../../Utils/modal/OperatorSupportAction'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const OperatorSupport = () => {
    const [show, setShow] = useState(false)
    const [callInfo, setCallInfo] = useState('')
    
    const handleClose = () => {
        setShow(false)
    }

    const response = () => {
        setShow(false)
    }

    const openMessage = (user) => {
        setCallInfo(user)
        setShow(true)
    }
    

    const users = [
    ]

    return (
        <>
            <Wrapper pageTitle="مدیریت تماس با ما" >
                <div className="page-wrapper">
                    <BreadCrumb> مدیریت تماس با ما </BreadCrumb>
                    <div className='animate__animated animate__fadeIn OperatorSupport'>
                        <Table bordered responsive>
                            <thead>
                                <tr>
                                    <th className='text-center'>کد</th>
                                    <th className='text-center'>نام</th>
                                    <th className='text-center'>شماره</th>
                                    <th className='text-center'>ایمیل</th>
                                    <th className='text-center'>زمان</th>
                                    <th className='text-center'>وضعیت</th>
                                    <th className='text-center'>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.code}</td>
                                        <td>{user.name}</td>
                                        <td>{user.number}</td>
                                        <td>{user.email}</td>
                                        <td>{user.date}</td>
                                        <td>{user.res}</td>
                                        <td className='text-center'><Button className='main-btn' onClick={() => openMessage(user)}> باز کردن </Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Wrapper>
            <OperatorSupportAction 
                data={callInfo}
                show={show} 
                handleClose={handleClose}
                response={response}
            />
        </>
    )
}

export default OperatorSupport
