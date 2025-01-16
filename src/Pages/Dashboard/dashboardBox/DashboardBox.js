import React from 'react'
import BoxTitle from './boxTitle/BoxTitle'
import './style.scss'

const DashboardBox = (props) => {
    return (
        <div id={props.id} className='px-0 animate__animated animate__fadeIn'>
            <div className="box_conatiner">
                <BoxTitle title={props.title} />
                <div className="row px-3">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default DashboardBox
