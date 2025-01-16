import React, { useState } from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import MainTable from '../../../Utils/table/MainTable'
import { Button } from 'react-bootstrap'
import MainModal from '../../../Utils/modal/MainModal'
import AdminLibModal from './AdminLibModal'

const AdminLib = () => {
    const [infoModal, setInfoModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const handleClose = () => {
        setInfoModal(false)
        setDeleteModal(false)
    }

    const api = [ 
        { code: '17', username: 'sima', name: 'سیما مجتهدی', title: 'آینده کشاورزی صنعتی', subject: 'آینده کشاورزی صنعتی', writer: 'سیما مجتهدی', publisher: 'نامشخص', submit_date: '1367/02/02', status: 'در حال بررسی' },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className=''>
            <Button className='btn-warning btn-sm px-3 mx-1' onClick={() => setInfoModal(true)} >ویرایش</Button>
            <Button className='btn-danger btn-sm px-3 mx-1' onClick={() => setDeleteModal(true)}>حذف</Button>
        </div>
    }))

      const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام کاربری', accessor: 'username' },
        { Header: 'نام', accessor: 'name' },
        { Header: 'عنوان', accessor: 'title' },
        { Header: 'موضوع', accessor: 'subject' },
        { Header: 'نویسنده/گردآورنده/مترجم', accessor: 'writer' },
        { Header: 'ناشر', accessor: 'publisher' },
        { Header: ' تاریخ چاپ', accessor: 'submit_date' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'عملیات', accessor: 'actions' },
      ]

    return (
        <Wrapper pageTitle="مدیریت کتاب‌ها و مقالات" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت کتاب‌ها و مقالات </BreadCrumb>
                <div className='animate__animated animate__fadeIn'>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>

            {infoModal && <AdminLibModal show={infoModal} handleClose={handleClose} /> }

            {deleteModal && 
                <MainModal show={deleteModal} handleClose={handleClose} title='حذف کتاب'>
                    <p>کتاب حذف شود ؟</p>
                    <div className='d-flex justify-content-end'>
                        <Button className='btn-sm px-3 mx-1' type='button' variant='secondary' onClick={handleClose} >انصراف</Button>
                        <Button className='btn-sm px-3 mx-1' type='button' variant='danger' onClick={handleClose} >حذف</Button>
                    </div>
                </MainModal>
            }
        </Wrapper>
    )
}

export default AdminLib
