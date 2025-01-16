import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import UserExpense from './UserExpense'
import UserFriends from './UserFriends'
import UserHeadInfo from './UserHeadInfo'
import UserMainData from './UserMainData'
import UserPackages from './UserPackages'
import UserPoints from './UserPoints'
import UserPointsChart from './UserPointsChart'
import './style.scss'
import UserExpenseChart from './UserExpenseChart'

const Account = () => {
    return (
        <Wrapper pageTitle="حساب کاربری" >
            <div className="page-wrapper">
                <BreadCrumb>حساب کاربری</BreadCrumb>
                <div className="col-md-12 mt-2 animate__animated animate__fadeIn">
                    <div className='account'>
                        <div className='user_main_info_container'>
                            <UserMainData />
                            <UserHeadInfo />
                        </div>
                        <UserPackages /> 

                        <div className='user_activity_container'>
                            <UserPoints />
                            <UserPointsChart />
                        </div>

                        <UserFriends />
                        
                        <div className='user_expense_container'>
                            <UserExpense />
                            <UserExpenseChart />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Account
