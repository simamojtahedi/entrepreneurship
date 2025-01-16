import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../../Utils/Wrapper/Wrapper'
import UserAccount from './tabs/UserAccount'
import UserAvatar from './tabs/UserAvatar'
import UserCash from './tabs/UserCash'
import UserCertificates from './tabs/UserCertificates'
import UserConatct from './tabs/UserConatct'
import UserCredit from './tabs/UserCredit'
import UserPassword from './tabs/UserPassword'
import UserPoints from './tabs/UserPoints'

const EditUserPage = (props) => {
    const data = props.location.data

    return (
        <Wrapper pageTitle="ویرایش کاربران" >
            <div className="page-wrapper">
                <BreadCrumb><Link to="/operator-editusers"> ویرایش کاربران </Link> / {`ویرایش اطلاعات ${data?.name}`} </BreadCrumb>
                <div className='animate__animated animate__fadeIn edit_user_tabs'>
                    <Tabs defaultActiveKey="account" id="edit-user">
                        <Tab eventKey="account" title="حساب کاربری">
                            <UserAccount data={data} />
                        </Tab>
                        <Tab eventKey="password" title="رمز عبور">
                            <UserPassword data={data} />
                        </Tab>
                        <Tab eventKey="contact" title="اطلاعات تماس">
                            <UserConatct data={data} />
                        </Tab>
                        <Tab eventKey="certificates" title="دریافت مدارک">
                            <UserCertificates data={data} />
                        </Tab>
                        <Tab eventKey="avatar" title="آواتار">
                            <UserAvatar data={data} />
                        </Tab>
                        <Tab eventKey="cash" title="اطلاعات مالی">
                            <UserCash />
                        </Tab>
                        <Tab eventKey="credit" title="اطلاعات اعتباری">
                            <UserCredit />
                        </Tab>
                        <Tab eventKey="points" title="اطلاعات امتیاز">
                            <UserPoints />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default EditUserPage
