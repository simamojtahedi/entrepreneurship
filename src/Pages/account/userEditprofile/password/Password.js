import React from 'react'
import ChangePassword from './ChangePassword'
import TwoStepVerification from './TwoStepVerification'

const Password = () => {
    return (
        <div className='p-3'>
            <ChangePassword />
            <TwoStepVerification />
        </div>
    )
}

export default Password
