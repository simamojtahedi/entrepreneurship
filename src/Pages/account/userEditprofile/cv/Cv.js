import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cv = () => {
    const [cv, setCv] = useState(false)

    return (
        <div className='p-3'>
            {cv ?
                <p className="text-center my-4">رزومه</p>
            :
                <div className="d-flex flex-column align-items-center">
                    <img src="/assets/img/icons/error.png" alt="خطا" style={{width: '100px', margin: '20px 0'}} />
                    <h5 className="text-center my-4 bold">گذراندن سطح آمادگی و دوره مقدماتی مدیریت MBA برای دسترسی به این قسمت الزامیست</h5>
                    <p className="text-center">برای اطلاع بیشتر به بخش <Link to="/">راهنمای سطح آمادگی</Link> مراجعه کنید.</p>
                </div>
            }
            
        </div>
    )
}

export default Cv
