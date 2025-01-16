import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import Contact from './contact/Contact'
import Cv from './cv/Cv'
import Documents from './documents/Documents'
import EditModal from './EditModal'
import MainInfo from './mainInfo/MainInfo'
import Password from './password/Password'
import Settings from './settings/Settings'
import './style.scss'

const EditProfile = () => {

    return (
        <Wrapper pageTitle="ویرایش پرونده" >
            <div className="page-wrapper">
                <BreadCrumb>ویرایش پرونده</BreadCrumb>
                <EditModal />

                <div className="editProfile animate__animated animate__fadeIn">
                    <Tabs defaultActiveKey="files" id="edit-profile" >
                        <Tab eventKey="files" title="پرونده شما">
                            <MainInfo />
                        </Tab>
                        <Tab eventKey="password" title="رمز عبور">
                            <Password />
                        </Tab>
                        <Tab eventKey="contact" title="اطلاعات تماس">
                            <Contact />
                        </Tab>                       
                        <Tab eventKey="documents" title="ارسال مدارک">
                            <Documents />
                        </Tab>
                        <Tab eventKey="settings" title="تنظیمات پروفایل">
                            <Settings />
                        </Tab>
                        <Tab eventKey="cv" title="روزمه">
                            <Cv />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default EditProfile
