import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import Add from './Add'
import Upload from './Upload'
import Download from './Download'
import { Tab, Tabs } from 'react-bootstrap'

const OperatorQuestions = () => {

    return (
        <Wrapper pageTitle="مدیریت سوالات" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت سوالات </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <Tabs defaultActiveKey="add" id="OperatorQuestions">
                        <Tab eventKey="add" title="اضافه کردن سوال">
                            <Add />
                        </Tab>
                        <Tab eventKey="upload" title="بارگذاری سوالات">
                            <Upload />
                        </Tab>
                        <Tab eventKey="download" title="بارگیری سوالات">
                            <Download />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default OperatorQuestions
