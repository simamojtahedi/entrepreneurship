import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const AdminTicket = () => {
    return (
        <Wrapper pageTitle="تیکتینگ" >
            <div className="page-wrapper">
                <BreadCrumb> تیکتینگ </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <h5 className='text-center mt-5'>تیکتی وجود ندارد !</h5>
                </div>
            </div>
        </Wrapper>
    )
}

export default AdminTicket
