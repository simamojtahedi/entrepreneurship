import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import BbbSettingsTab from './BbbSettingsTab'

const Settings = () => {
    return (
        <Wrapper pageTitle="تنظیمات" >
            <div className="page-wrapper">
                <BreadCrumb> تنظیمات </BreadCrumb>
                <div className='animate__animated animate__fadeIn Settings'>
                    <Tabs defaultActiveKey="servers" id="Settings" >
                        <Tab eventKey="servers" title=" سرورها">
                            <BbbSettingsTab />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default Settings
