import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { innovation } from '../../../data/innovation/innovation'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Innovation from '../../../Utils/modal/Innovation'

const InnovationRequests = (props) => {
  const [data, setData] = useState({})
  const [show, setShow] = useState(false)
  const [innovationId, setInnovationId] = useState('')

  const close = () => {
    setShow(false)
  }

  const showDeatils = (id) => {
    setShow(true)
    setInnovationId(id)
  }

  useEffect(() => {
    const innovationData = innovation.filter(item => item.id === props.id)[0]
    setData(innovationData)
  }, [props.id])

  return (
    <>
      <BreadCrumb><span className='breadcrumb-link' onClick={props.showInnovation}> فرصت‌های نوآوری </span> / درخواست‌های بهره‌برداری از فرصت </BreadCrumb>
      <div className='innovation-request-container col-lg-12 animate__animated animate__fadeIn'>
        <h1>{data.title}</h1>
        <div className='requests-container'>
          {data.requests && data.requests.length ?
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>نام کاربر</th>
                  <th>عنوان</th>
                  <th>قالب همکاری</th>
                  <th>نوع مالکیت</th>
                  <th>مدت زمان لازم</th>
                  <th className='text-center'>جزئیات</th>
                </tr>
              </thead>
              <tbody>
              {data.requests.map(item => (
                <tr key={item.id}>
                  <th>{item.name}</th>
                  <th>{item.title}</th>
                  <th>{item.type}</th>
                  <th>{item.ownership}</th>
                  <th>{item.time} ماه</th>
                  <th className='text-center'><button className='btn btn-warning btn-sm px-3' onClick={() => {showDeatils(item.id)}}>جزئیات</button></th>
                </tr>
              ))}
              </tbody>
            </Table>
          :
            <div className='text-center'>
              <h6> درخواستی ثبت نشده است، برای این فرصت درخواستی ثبت کنید : </h6>
              <button className='btn btn-success mt-3 px-4' onClick={() => props.ShowDetails(props.id)}> ثبت درخواست </button>
            </div>
            
          }
        </div>
      </div>
      {show && <Innovation show={show} close={close} data={data} id={innovationId} />}
    </>
  )
}

export default InnovationRequests