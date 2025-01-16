import React from 'react'
import { Button } from 'react-bootstrap'

const UserAvatar = () => {
    return (
        <div className='col-lg-2 edit_user_avatar'>
            <img src='/assets/img/user.png' />
            <Button className='btn-sm btn-danger px-3'>حذف</Button>
        </div>
    )
}

export default UserAvatar
