import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import Recorded from './Recorded'
import Sessions from './Sessions'
import './style.scss'

const Operatorbbb = () => {
    return (
        <Wrapper pageTitle="مدیریت سامانه آموزشی" >
            <div className="page-wrapper">
                <BreadCrumb>مدیریت سامانه آموزشی</BreadCrumb>
                <div className="animate__animated animate__fadeIn">
                    <Tabs defaultActiveKey="sessions" id="operator-bbb" >
                        <Tab eventKey="sessions" title="جلسات در حال برگذاری">
                            <Sessions />
                        </Tab>
                        <Tab eventKey="recorded" title="رویدادهای ضبط شده">
                            <Recorded />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default Operatorbbb
