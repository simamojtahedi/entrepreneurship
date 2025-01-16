import React, { useEffect, useState } from 'react'
import { innovation } from '../../../data/innovation/innovation'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import SubmitRequest from './SubmitRequest'

const InnovationDetails = (props) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const innovationData = innovation.filter(item => item.id === props.id)[0]
    setData(innovationData)
  }, [props.id])

  return (
    <>
    {data.details &&
      <>
        <BreadCrumb><span className='breadcrumb-link' onClick={props.showInnovation}> فرصت‌های نوآوری </span> / جزئیات فرصت </BreadCrumb>
        <div className='innovation-details-container animate__animated animate__fadeIn'>
          <h1>{data.title}</h1>
          <div>
            <span>موضوع: </span>
            <span>{data.subject}</span>
          </div>
          <div>
            <span>شرح چالش:</span>
            <span>{data.details.details}</span>
          </div>
          <div>
            <span>سابقه و پیشینه چالش:</span>
            <span>{data.details.history}</span>
          </div>
          <div>
            <span>اقدامات انجام شده تا کنون:</span>
            <span>{data.details.actions}</span>
          </div>
          <div>
            <span>مجری اقدامات:</span>
            <span>{data.details.administrative}</span>
          </div>
          <div>
            <span>نتیجه اقدامات:</span>
            <span>{data.details.result}</span>
          </div>
          <div>
            <span>راهکارهای پیشنهادی رفع چالش:</span>
            <span>{data.details.offers}</span>
          </div>
          <div>
            <span>ارزش مالی رفع چالش:</span>
            <span>{parseInt(data.details.financial_value).toLocaleString()} ریال</span>
          </div>
          <div>
            <span>ثبت شده در تاریخ:</span>
            <span>{data.registration}</span>
          </div>
          <div>
            <span>آخرین بازبینی :</span>
            <span>{data.review}</span>
          </div>
          {data.details.pictures && data.details.pictures.length ?
            <div className='images'>
                <span>تصاویر: </span>
                <div>
                  {data.details.pictures.map(picture => (
                    <img key={picture.id} src={picture.url} alt={picture.name} className='w-100' />
                  ))}
                </div>
            </div>
            :
              ''
          }
        </div>
      </>
    }
      <SubmitRequest id={props.id} return={props.showInnovation} />

    </>
  )
}

export default InnovationDetails