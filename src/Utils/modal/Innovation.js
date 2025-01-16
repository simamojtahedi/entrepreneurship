import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './style.scss'

const Innovation = (props) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const innovationData = props.data.requests.filter(item => item.id === props.id)[0]
    setData(innovationData)
  }, [props.data])

  (data)

  return (
    <Modal size='lg' show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
        <Modal.Title> جرئیات درخواست‌ بهره‌برداری از فرصت </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='modal-innovation-request-details'>
          <h6>جزئیات رفع چالش</h6>
          <div>
            <span> عنوان : </span>
            <span>{data.title}</span>
          </div>
          <div>
            <span> قالب همکاری برای رفع چالش : </span>
            <span>{data.type}</span>
          </div>
          <div>
            <span> شرح تفصیلی : </span>
            <span>{data.description}</span>
          </div>
          <div>
            <span> روش های اجرایی طرح : </span>
            <span>{data.methods}</span>
          </div>
          <div>
            <span> مدت زمان لازم برای حل چالش : </span>
            <span>{data.time} ماه</span>
          </div>
          <div>
            <span>تاریخ ثبت : </span><span>{data.date}</span>
          </div>
          <div>
            <span>آخرین اصلاح : </span><span>{data.edit}</span>
          </div>
          <div>
            <span>آخرین بازبینی : </span><span>{data.review}</span>
          </div>
        </div>

        <div className='modal-innovation-request-expert'>
          <h6>نظر کارشناس درباره راهکار ثبت شده</h6>
          <div>
            <span> نام کارشناس : </span>
            <span>{data.expert_opinion && data.expert_opinion.name}</span>
          </div>
          <div>
            <span> متن : </span>
            <span>{data.expert_opinion && data.expert_opinion.description}</span>
          </div>
          <div>
            <span> تاریخ : </span>
            <span>{data.expert_opinion && data.review}</span>
          </div>
        </div>
      
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.close}>
            بستن
        </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default Innovation