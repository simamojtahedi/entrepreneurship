import React, { useState } from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import MainTable from '../../../Utils/table/MainTable'
import AddCenter from './AddCenter'
import Clinics from './Clinics'
import { HiPlus } from 'react-icons/hi'
import { Button, Tab, Tabs } from 'react-bootstrap'
import EditCenter from './EditCenter'

const OperatorConsultation = () => {
    const [centerData, setCenterData] = useState({})
    const [addCenter, setAddCenter] = useState(false)
    const [editCenter, setEditCenter] = useState(false)


    const addCenterHandler = () => {
        setAddCenter(true)
    }

    const handleEdit = (data) => {
        setEditCenter(true)
        setCenterData(data)
    }


    const api = [ 
        { 
            code: '12', 
            center: 'ایده های نو', 
            name: 'رضا فراهانی', 
            clinic: 'کلینیک مدیریت', 
            type: 'مجازی', 
            date: '1400/02/02', 
            hours: '12', 
            cash: '10000', 
            credit: '10000', 
            status: 'در حال ثبت نام' 
        },
    ]

    const data = api.map(v => ({...v, actions: 
        <div className='d-flex justify-content-around'>
            <Button className='btn-warning btn-sm px-3' onClick={()=> {handleEdit(v)}} >ویرایش</Button>
        </div>
    }))

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'مرکز', accessor: 'center' },
        { Header: 'کلینیک', accessor: 'clinic' },
        { Header: 'نوع', accessor: 'type' },
        { Header: 'نام مشاور', accessor: 'name' },
        { Header: 'مهلت ثبت نام', accessor: 'date' },
        { Header: 'ساعات', accessor: 'hours' },
        { Header: 'مبلغ نقدی (ریال)', accessor: 'cash' },
        { Header: 'مبلغ بورسیه (ریال)', accessor: 'credit' },
        { Header: 'وضعیت', accessor: 'status' },
        { Header: 'عملیات', accessor: 'actions' },

    ]
      
    return (
        <Wrapper pageTitle="مدیریت کلینیک مشاوره" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت کلینیک مشاوره </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <Tabs defaultActiveKey="centers" id="OperatorConsultation">
                        <Tab eventKey="centers" title="لیست مراکز">
                            <div className='manage_header'>
                                <div className='manage_header_item' onClick={addCenterHandler }>
                                    <HiPlus />
                                    <h6>اضافه کردن مرکز </h6>
                                </div>
                            </div>
                            <MainTable data={data} columns={columns} />
                        </Tab>
                        <Tab eventKey="clinics" title="مدیریت کلینیک‌ها">
                            <Clinics />
                        </Tab>
                    </Tabs>

                    {addCenter && <AddCenter addCenter={addCenter} setAddCenter={setAddCenter} />}
                    {editCenter && <EditCenter editCenter={editCenter} setEditCenter={setEditCenter} data={centerData} /> }
                </div>
            </div>
        </Wrapper>
    )
}

export default OperatorConsultation
