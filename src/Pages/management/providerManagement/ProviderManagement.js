import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import DeniedAccess from '../../../Utils/deniedAccess/DeniedAccess'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const ProviderManagement = () => {
    return (
        <Wrapper pageTitle="مدیریت مراکز آموزش و مشاوره" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت مراکز آموزش و مشاوره </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <DeniedAccess />
                </div>
            </div>
        </Wrapper>
    )
}

export default ProviderManagement
