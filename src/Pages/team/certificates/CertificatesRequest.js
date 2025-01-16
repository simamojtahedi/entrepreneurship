import React from 'react'
import { Table } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const CertificatesRequest = () => {
  return (
    <Wrapper pageTitle="مدارک" >
      <div className="page-wrapper">
        <BreadCrumb> مدارک </BreadCrumb>
        <div className='animate__animated animate__fadeIn'>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>نام‌دوره</th>
                <th>دوره</th>
                <th>امتیاز صدور</th>
                <th>کد مدرک</th>
                <th>درخواست صدور</th>
              </tr>
            </thead>
          </Table>

          <h6 className='text-center mt-4'>تاکنون درخواستی ثبت نشده است</h6>
        </div>
      </div>
    </Wrapper>
  )
}

export default CertificatesRequest