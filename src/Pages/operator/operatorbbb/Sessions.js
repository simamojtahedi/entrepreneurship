import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { HiPlus } from 'react-icons/hi'
import MainTable from '../../../Utils/table/MainTable'
import CreateSession from './CreateSession'

const Sessions = () => {
    const [addBox, setAddBox] = useState(false)

    const peoples = [
        {user: 'سیما مجتهدی', mic: false, speaker: false},
        {user: 'سیما امیری', mic: true, speaker: false}
    ]

    const api = [ 
        { 
            code: '12', 
            name: 'اتاق جلسات',
            creator: 'مدیر سامانه',
            time: '480 دقیقه',
            peoples: <Button className='btn-sm px-3'>{peoples.length}</Button>,
            submit_date: '1400/2/2 - 08:25:36', 
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className=''>
            <Button className='btn-success btn-sm px-3 mx-1'>ورود</Button>
            <Button className='btn-success btn-sm px-3 mx-1'>ورود به صورت کاربر</Button>
            <Button className='btn-danger btn-sm px-3 mx-1'>حذف</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام جلسه', accessor: 'name' },
        { Header: 'سازنده', accessor: 'creator' },
        { Header: 'مدت زمان', accessor: 'time' },
        { Header: 'اعضا', accessor: 'peoples' },
        { Header: 'زمان ایجاد', accessor: 'submit_date' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    return (
        <>
            <div className='mt-3 col-12 manage_header'>
                <div className='manage_header_item' onClick={() => setAddBox(true)}>
                    <HiPlus />
                    <h6>تشکیل جلسه</h6>
                </div>
            </div>
            <div className='mt-3'>
                <MainTable data={data} columns={columns} />
            </div>
            {addBox && <CreateSession show={addBox} handleClose={() => setAddBox(false)}  />}
        </>
    )
}

export default Sessions
