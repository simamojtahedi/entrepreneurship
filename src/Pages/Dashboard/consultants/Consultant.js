import React from 'react'
import { Link } from 'react-router-dom'

const Consultant = () => {
  return (
    <div className='consultant'>
        <h5>مشاوره‌های شما</h5>
        <div className='all_consultants'>
            <p className='text-center mt-5 mb-0'> شما مشاوره رزرو شده‌ای ندارید</p>
            <p className='text-center mb-3'>از طریق لینک زیر، با یک مشاور شروع کنید</p>
            <Link to='consultation' className='shadow-btn mt-3'> 
            مشاوره
            <i className='fa fa-angle-left'></i>
            </Link>
        </div>
    </div>
  )
}

export default Consultant