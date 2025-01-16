import React from 'react'
import './style.scss'

const DeniedAccess = () => {
    return (
        <div className='denied-access'>
            <img src='/assets/img/icons/error.png' className='error-icon' />
            <h3>دسترسی غیر مجاز!</h3>
        </div>
    )
}

export default DeniedAccess
