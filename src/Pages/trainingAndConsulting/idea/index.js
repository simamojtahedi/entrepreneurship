import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import NewIdea from './NewIdea'
import './style.scss'
import UserIdeas from './UserIdeas'

const Idea = () => {
    const [userIdeas, setUserIdeas] = useState(false)

    return (
        <Wrapper pageTitle=" ایده‌ها" >
            <BreadCrumb>  ایده‌ها </BreadCrumb>
            <div className="investmentContainer animate__animated animate__fadeIn">
                <Tabs defaultActiveKey="submit" id="investment">
                    <Tab eventKey="submit" title="ثبت ایده یا طرح">
                        <NewIdea />
                    </Tab>
                    <Tab eventKey="followup" title="پیگیری ایده ثبت شده">
                        {userIdeas ? <UserIdeas /> : 
                        <div className="d-flex flex-column align-items-center pt-5">
                            <img src="/assets/img/icons/error.png" alt="خطا" style={{width: '100px', margin: '20px 0'}} />
                            <h6 className="text-center mt-1 ">شما ایده ای ثبت نکرده‌اید</h6>
                        </div>
                        }
                    </Tab>
                </Tabs>
            </div>
        </Wrapper>
    )
}

export default Idea
