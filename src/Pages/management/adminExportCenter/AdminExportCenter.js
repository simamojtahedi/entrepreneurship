import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import UsersExportTab from './UsersExportTab'
import CertificatesExportTab from './CertificatesExportTab'
import './style.scss'

const AdminExportCenter = () => {
    return (
        <Wrapper pageTitle="پشتیبان گیری و خروج اطلاعات" >
            <div className="page-wrapper">
                <BreadCrumb> پشتیبان گیری و خروج اطلاعات </BreadCrumb>
                <div className='animate__animated animate__fadeIn adminExportSettings'>
                    <Tabs defaultActiveKey="users" id="adminExportSettings" >
                        <Tab eventKey="users" title="کاربران">
                            <UsersExportTab />
                        </Tab>
                        <Tab eventKey="certificates" title="مدارک">
                            <CertificatesExportTab />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default AdminExportCenter
