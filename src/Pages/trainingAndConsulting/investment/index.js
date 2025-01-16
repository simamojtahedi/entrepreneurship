import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import NewInvestment from './NewInvestment'
import './style.scss'
import UserInvestments from './UserInvestments'

const Investment = () => {
    const [userInvests, setUserInvests] = useState(true)

    return (
        <Wrapper pageTitle=" جذب سرمایه و امکانات" >
            <div className="page-wrapper">
                <BreadCrumb>  جذب سرمایه و امکانات </BreadCrumb>

                <Tabs defaultActiveKey="home" id="userInvests-tab">
                    <Tab eventKey="home" title="اعلام حمایت جدید" className='animate__animated animate__fadeIn'>
                        <NewInvestment />
                    </Tab>
                    <Tab eventKey="followup" title="پیگیری حمایت ثبت شده" className='animate__animated animate__fadeIn'>
                        {userInvests ? <UserInvestments /> : 
                            <div className="d-flex flex-column align-items-center all-investments">
                                <img src="/assets/img/icons/error.png" alt="خطا" style={{width: '100px', margin: '20px 0'}} />
                                <h6 className="text-center mt-1 ">شما ایده‌ای ثبت نکرده‌اید</h6>
                            </div>                            
                        }
                    </Tab>
                </Tabs>

            </div>
        </Wrapper>
    )
}

export default Investment
