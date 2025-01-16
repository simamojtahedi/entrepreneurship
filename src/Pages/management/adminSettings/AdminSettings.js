import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import AdvertisingTab from './AdvertisingTab'
import RegisterTab from './RegisterTab'
import './style.scss'

const AdminSettings = () => {
    return (
        <Wrapper pageTitle="تنظیمات باشگاه" >
            <div className="page-wrapper">
                <BreadCrumb> تنظیمات باشگاه </BreadCrumb>
                <div className='animate__animated animate__fadeIn adminSettings'>
                    <Tabs defaultActiveKey="register" id="adminSettings" >
                        <Tab eventKey="register" title="تنظیمات ثبت نام">
                            <RegisterTab />
                        </Tab>
                        <Tab eventKey="advertising" title="تبلیغات">
                            <AdvertisingTab />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default AdminSettings
