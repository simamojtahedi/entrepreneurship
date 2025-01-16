import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import DeniedAccess from '../../../Utils/deniedAccess/DeniedAccess'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const operatorInvestment = () => {
    return (
        <Wrapper pageTitle="مدیریت ایده و نوآوری" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت ایده و نوآوری </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <DeniedAccess />
                </div>
            </div>
        </Wrapper>
    )
}

export default operatorInvestment
