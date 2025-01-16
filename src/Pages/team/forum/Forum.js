import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import Employment from './subjects/Employment'
import Entrepreneurship from './subjects/Entrepreneurship'
import General from './subjects/General'
import './style.scss'

const Forum = () => {
    return (
        <Wrapper pageTitle="تالار گفتگو" >
            <div className="page-wrapper">
                <BreadCrumb> تالار گفتگو </BreadCrumb>

                <div className="col-md-12 mt-4 animate__animated animate__fadeIn"> 
                    <Entrepreneurship />
                    <Employment />
                    <General />
                </div>
            </div>
        </Wrapper>
    )
}

export default Forum
