import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { HiPlus } from 'react-icons/hi'
import AddServer from './AddServer'
import DeleteServer from './DeleteServer'
import EditServer from './EditServer'


const BbbSettingsTab = () => {
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [serverData, setServerData] = useState({})

    const handleClose = () => {
        setAddModal(false)
        setEditModal(false)
        setDeleteModal(false)
    }

    const openEditModal = (item) => {
        setEditModal(true)
        setServerData(item)
    }

    const openDeleteModal = (item) => {
        setDeleteModal(true)
        setServerData(item)
    }

    const data = [
        {id:1, code:1, address: 'https://event.lmsirceo.ir/bigbluebutton', security: 'ztlk4k16ffkx3f83aljsmwjcmsht1vec', status: 'فعال'},
        {id:2, code:2, address: 'https://event.lmsirceo.ir/asas', security: 'ztlk4k16ffkx3f83aljsmwjcmsht1vec', status: 'فعال'}
    ]

    return (
        <div>
            <Button className='main-btn mt-5 mb-3' onClick={() => setAddModal(true)}> اضافه کردن <HiPlus /></Button>
            <Table bordered responsive className='mt-4'>
                <thead>
                    <tr>
                        <th>کد</th>
                        <th>آدرس سرور</th>
                        <th>security salt</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.code}</td>
                            <td>{item.address}</td>
                            <td>{item.security}</td>
                            <td>{item.status}</td>
                            <td className=''>
                                <Button variant='primary' className='btn-sm mx-1 px-3' onClick={() => openEditModal(item)}>ویرایش</Button>
                                <Button variant='danger' className='btn-sm mx-1 px-3' onClick={() => openDeleteModal(item)}>حذف</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {addModal && <AddServer addModal={addModal} handleClose={handleClose} handleCreate={() => setAddModal(false)} /> }
            {editModal && <EditServer editModal={editModal} handleClose={handleClose} handleEdit={() => setEditModal(false)} data={serverData} /> }
            {deleteModal && <DeleteServer deleteModal={deleteModal} handleClose={handleClose} handleDelete={() => setDeleteModal(false)} data={serverData} /> }
        </div>
    )
}

export default BbbSettingsTab
