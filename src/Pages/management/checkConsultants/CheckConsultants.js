import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import DeniedAccess from '../../../Utils/deniedAccess/DeniedAccess'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const CheckConsultants = () => {
    return (
        <Wrapper pageTitle="مدیریت مشاوران" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت مشاوران </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <DeniedAccess />
                </div>
            </div>
        </Wrapper>
    )
}

export default CheckConsultants
