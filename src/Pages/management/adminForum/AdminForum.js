import React, { useState } from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import { BsShop } from 'react-icons/bs'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { Button, Table } from 'react-bootstrap'
import ForumModal from './ForumModal'

const AdminForum = () => {
    const [show, setShow] = useState(false)
    const [modalInfo, setModalInfo] = useState({
        createSubject: false,
        createRow: false,
        editSubject: false,
        editRow: false,
        deleteSubject: false,
        deleteRow: false,
        id: undefined
    })

    const handleClose = () => {
        setShow(false)
        setModalInfo({
            createSubject: false,
            createRow: false,
            editSubject: false,
            editRow: false,
            deleteSubject: false,
            deleteRow: false,
            id: undefined
        })
    }

    const forum = [
        {id: 1, title: 'دفتر کار', data: [ {name: ' اس ام اس', id: 1}, {name: ' برد', id: 2}, {name: ' میت', id: 3}, {name: ' لاین', id: 4}, {name: ' فکس', id: 5}, {name: ' ویس', id: 6}, {name: ' آفیس', id: 7} ]},
        {id: 2, title: 'مهارتکده', data: [{name: 'دوره‌های آموزشی', id: 1}]},
        {id: 3, title: 'کلینیک مشاوره', data: [{name: 'کلینیک مشاوره', id: 1}]},
        {id: 4, title: 'عمومی', data: [{name: 'اخبار', id: 1}]}
    ]

    return (
        <Wrapper pageTitle="مدیریت تالار گفتگو" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت تالار گفتگو </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <div className='col-12 manage_header'>
                        <div className='manage_header_item' onClick={() => {
                            setModalInfo({...modalInfo, createSubject: true })
                            setShow(true)
                        }}>
                            <BsShop />
                            <h6>ایجاد بخش</h6>
                        </div>
                        <div className='manage_header_item' onClick={() => {
                            setModalInfo({...modalInfo, createRow: true })
                            setShow(true)
                        }}>
                            <RiShoppingBasketLine />
                            <h6>ایجاد تالار</h6>
                        </div>
                    </div>
                    <div>
                        {forum.map(item => (
                            <Table responsive bordered key={item.id} className='mt-3'>
                                <thead>
                                    <tr>
                                        <th className='col-lg-8 d-flex align-items-center'>
                                            {item.title}
                                            <Button className='btn-sm px-2 mx-1 btn-warning' onClick={() => {
                                                setModalInfo({...modalInfo, editSubject: true, id: item.id })
                                                setShow(true)
                                            }}>ویرایش</Button>
                                            <Button className='btn-sm px-2 mx-1 btn-danger' onClick={() => {
                                                setModalInfo({...modalInfo, deleteSubject: true, id: item.id })
                                                setShow(true)
                                            }}>حذف</Button>
                                        </th>
                                        <th>موضوعات</th>
                                        <th>نوشته‌ها</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.data.map(row => (
                                        <tr key={row.id}>
                                            <td className='col-lg-8'>{row.name}</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td className='text-center'>
                                                <Button className='btn-sm px-3 mx-2 btn-warning' onClick={() => {
                                                    setModalInfo({...modalInfo, editRow: true, id: item.id })
                                                    setShow(true)
                                                }}>ویرایش</Button>
                                                <Button className='btn-sm px-3 mx-2 btn-danger' onClick={() => {
                                                    setModalInfo({...modalInfo, deleteRow: true, id: item.id })
                                                    setShow(true)
                                                }}>حذف</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ))}
                    </div>
                </div>
            </div>
            {<ForumModal show={show} handleClose={handleClose} modalInfo={modalInfo} />}
        </Wrapper>
    )
}

export default AdminForum
