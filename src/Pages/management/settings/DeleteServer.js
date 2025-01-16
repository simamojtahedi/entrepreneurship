import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import MainModal from '../../../Utils/modal/MainModal'

const DeleteServer = (props) => {
    const [server, setServer]= useState({
        address: '',
        security: '',
        id: ''
    })

    useEffect(() => {
        setServer({
            address: props.data.address,
            security: props.data.security,
            id: props.data.id
        })    
    }, [props.data])

    const handleDelete = () => {
        ('deleted!')
        props.handleClose()
    }

    return (
        <MainModal show={props.deleteModal} handleClose={props.handleClose} title='حذف سرور' >
            <p>سرور با مشخصات زیر حذف شود ؟</p>
            <p>{server.address}</p>
            <p>{server.security}</p>

            <div className='d-flex justify-content-end'>
                <Button variant="secondary" className='mx-1' onClick={props.handleClose}>
                    انصراف
                </Button>
                <Button variant="danger" className='mx-1' onClick={handleDelete}>
                    حذف
                </Button>
            </div>
        </MainModal>
    )
}

export default DeleteServer
