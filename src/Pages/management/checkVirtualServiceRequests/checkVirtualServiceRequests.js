import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import DeniedAccess from '../../../Utils/deniedAccess/DeniedAccess'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const checkVirtualServiceRequests = () => {
    return (
        <Wrapper pageTitle="مدیریت سرویس دفتر کار مجازی" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت سرویس دفتر کار مجازی </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <DeniedAccess />
                </div>
            </div>
        </Wrapper>
    )
}

export default checkVirtualServiceRequests
