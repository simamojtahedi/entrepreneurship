import React from 'react'
import { Button } from 'react-bootstrap'
import MainTable from '../../../Utils/table/MainTable'

const Recorded = () => {
    const peoples = [
        {user: 'سیما مجتهدی', mic: false, speaker: false},
        {user: 'سیما امیری', mic: true, speaker: false}
    ]

    const api = [ 
        { 
            code: '12', 
            view: <img src='https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg' width='80' />,
            name: 'اتاق جلسات',
            time: '480 دقیقه',
            peoples: <Button className='btn-sm px-3'>{peoples.length}</Button>,
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className=''>
            <Button className='btn-primary btn-sm px-3 mx-1'>بازبینی</Button>
            <Button className='btn-success btn-sm px-3 mx-1'>انتشار</Button>
            <Button className='btn-danger btn-sm px-3 mx-1'>حذف</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نما', accessor: 'view' },
        { Header: 'نام جلسه', accessor: 'name' },
        { Header: 'مدت زمان', accessor: 'time' },
        { Header: 'اعضا', accessor: 'peoples' },
        { Header: 'عملیات', accessor: 'actions' },
    ]

    return (
        <div className='mt-3'>
            <MainTable data={data} columns={columns} />
        </div>
    )
}

export default Recorded
