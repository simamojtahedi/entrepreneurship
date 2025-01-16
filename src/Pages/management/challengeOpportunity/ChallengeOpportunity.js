import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import Challenges from './challenges/Challenges'
import Opportunities from './opportunities/Opportunities'

const ChallengeOpportunity = () => {
    return (
        <Wrapper pageTitle="چالش‌ها-فرصت‌ها" >
            <div className="page-wrapper">
                <BreadCrumb> چالش‌ها-فرصت‌ها </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <Tabs defaultActiveKey="challenges" id="challenge-opportunity">
                        <Tab eventKey="challenges" title="چالش‌ها">
                            <Challenges />
                        </Tab>
                        <Tab eventKey="opportunities" title="فرصت‌ها">
                            <Opportunities />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default ChallengeOpportunity
