import React, { useState } from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import SieveForm from './SieveForm'
import './style.scss'

const Sieve = () => {
    const [showSieve, setShowSieve] = useState(false)

    const handleShowSieve = () => {
        window.scrollTo(0, 0)
        setShowSieve(true)
    }

    return (
        <Wrapper pageTitle="آزمون غربالگری">
            <div className="page-wrapper">
                <BreadCrumb> آزمون غربالگری </BreadCrumb>

                {showSieve ?
                    <SieveForm />
                :
                    <div className='sieve col-lg-8 offset-lg-2 animate__animated animate__fadeIn'>
                        <h2>کاربر گرامی، سلام</h2>
                        <p>همانطور که می‌­دانید، برای اینکه بتوانیم یک هسته کارآفرینی موفق تشکیل بدهیم باید افراد هسته (بویژه سرگروه) توانایی و ویژگی­‌های خاصی داشته باشند. یکی از مراحل تشکیل هسته برای سرگروه (الزامات) انجام تست "غربالگری" برای اندازه­‌گیری ویژگی‌­های شخصیتی کارآفرینی می باشد.</p>
                        <div>
                            <p>پس از اتمام تست نتیجه تست برای شما نمایش داده می‌شود، در صورت تمایل به دریافت مدرک نتیجه بصورت کتبی پس از اتمام آزمون می‌توانید در بخش "درخواست مدارک" از سطح اول سامانه درخواست خود را ثبت کنید.</p>
                            <h6>لطفاً توجه داشته باشید حتماً باید به تمامی سوالاتی که در ادامه می‌آید پاسخ دهید.</h6>
                        </div>
                        <button className='btn btn-primary' onClick={handleShowSieve}> شروع آزمون </button>
                    </div>
                }
                
            </div>
        </Wrapper>
    )
}

export default Sieve
