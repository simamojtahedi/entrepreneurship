import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import DeniedAccess from '../../../Utils/deniedAccess/DeniedAccess'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const CheckTeacher = () => {
    return (
        <Wrapper pageTitle="مدیریت اساتید" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت اساتید </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <DeniedAccess />
                </div>
            </div>
        </Wrapper>
    )
}

export default CheckTeacher
