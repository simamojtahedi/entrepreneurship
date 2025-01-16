import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import ManageTopUsers from './ManageTopUsers'
import TopUsers from './TopUsers'
import Champions from './Champions'
import './style.scss'

const OperatorStatistics = () => {

    const users = [
        {id:1, name: 'سارا فاضلی'},
        {id:2, name: ' یگانه یعقوبی'},
        {id:3, name: ' لیلا موحد'},
        {id:4, name: ' محمدامین رضایی'},
        {id:5, name: ' مریم مومن'},
    ]

    return (
        <Wrapper pageTitle="مدیریت آمار و اطلاعات" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت آمار و اطلاعات </BreadCrumb>
                <div className='animate__animated animate__fadeIn OperatorStatistics'>
                    <div className='top-five'>
                        <div className='main_title'> 5 نفر برتر باشگاه </div>
                        <Row>
                            {users.map(user => (
                                <Col size={2} key={user.id}>
                                    <Link to={`/profile/${user.id}`}>
                                        <span>{user.id}</span>
                                        <h6>{user.name}</h6>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className='top-users mt-5'>
                        <div className='main_title'>برترین‌های باشگاه </div>
                        <Row>
                            <TopUsers />
                        </Row>
                    </div>
                    <div className='top-users mt-5'>
                        <div className='main_title'>مدیریت برترین‌های باشگاه </div>
                        <Row>
                            <ManageTopUsers />
                            <Champions />
                        </Row>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default OperatorStatistics
