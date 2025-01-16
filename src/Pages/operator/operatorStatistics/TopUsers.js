import React from 'react'
import { Col } from 'react-bootstrap'

const TopUsers = () => {
    return (
        <Col lg={4} className='p-2'>
            <div className='top-users-info'>
                <h6>برترین‌های باشگاه</h6>
                <div className='top-users-table'>
                    <div>
                        <h5>روز</h5>
                        <h5>سونیا محمدی</h5>
                    </div>
                    <div>
                        <h5>هفته</h5>
                        <h5>سارا رضایی</h5>
                    </div>
                    <div>
                        <h5>ماه</h5>
                        <h5> زینب محمدی</h5>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default TopUsers
