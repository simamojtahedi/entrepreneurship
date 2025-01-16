import React from 'react'
import { OverlayTrigger, Popover, Button } from 'react-bootstrap'
import './style.scss'

const Confirm = (props) => {
  return (
    <>
        <OverlayTrigger
            show={props.show}
            trigger="click"
            placement="top"
            overlay={
            <Popover className='confirm-overlay'>
                    <Popover.Header as="h3">{props.title}</Popover.Header>
                    <Popover.Body>
                        <div className='actions'>
                            <Button variant="danger" onClick={props.close} >انصراف</Button>
                            <Button variant="success" onClick={props.submit} >تایید</Button>
                        </div>
                    </Popover.Body>
                </Popover>
            }
            >
            <Button onClick={props.confirm} className='light_btn'>{props.button}</Button>
        </OverlayTrigger>
    </>
  )
}

export default Confirm