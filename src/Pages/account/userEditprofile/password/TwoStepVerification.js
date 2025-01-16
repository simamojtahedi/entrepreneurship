import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Title from '../../../../Utils/title/Title'
import './style.scss'

const TwoStepVerification = () => {
    const [info, setInfo] = useState({
        status: 'active'
    })

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        (info)
    }

    return (
        <div className="mt-5">
            <Title> تایید دو مرحله‌ای </Title>
            <p>
            اگر رمز عبور دو مرحله ای را فعال کنید٬ برای ورود به حساب کاربری‌ علاوه بر وارد کردن رمز عبور خود٬ یک رمز عبور دیگری هم توسط تلفن همراه شما نشان داده می‌شود، که این رمز دوم تاریخ انقضای کوتاه مدتی دارد و به سرعت منقضی می‌شود.
            </p>
            <p>
            برای استفاده از این بخش ابتدا برنامه Google Authenticator یا برنامه های مشابه آن را روی دستگاه تلفن همراه خود نصب کنید٬‌سپس بعد از فعال سازی بارکدی که نشان داده می شود را توسط نرم افزار بخوانید. رمز دوم نشان داده شده در ورود بعدی قابل استفاده است.
            </p>
            <div className="my-5 d-flex align-items-center"><span >وضعیت :</span>
                <div className="mx-3">
                    <Form.Check inline label="فعال" name="status" type="radio" value={info.status} onChange={e => changeHandler(e)} />
                    <Form.Check inline label="غیرفعال" name="status" type="radio" value={info.status} onChange={e => changeHandler(e)} />
                </div>
            </div>
            <div className="my-5">
                <span> دانلود : </span>
                <div className="downloadLinks">
                    <Link to=""><img src="/assets/img/icons/windows.png" alt="Windows-store" /><span>Windows store</span></Link>
                    <Link to=""><img src="/assets/img/icons/google-play.png" alt="Google-play" /><span>Google play</span></Link>
                    <Link to=""><img src="/assets/img/icons/apple.png" alt="App-store" /><span>App store</span></Link>
                    <Link to=""><img src="/assets/img/icons/download.png" alt="سرور سایت" /><span>سرور سایت</span></Link>
                    <Link to="" className="lgLogos"><img src="/assets/img/icons/bazaar.png" alt="بازار" /></Link>
                    <Link to="" className="lgLogos"><img src="/assets/img/icons/myket.png" alt="مایکت" /></Link>
                </div>
            </div>
            <p>
            اگر دستگاه تلفن همراه خود را گم کرده اید یا به اشتباه پاک کرده اید میتوانید با استفاده از بخش فراموشی رمز عبور استفاده کنید یا با پشتیبانی از طریق تلفن یا فرم تماس با ما در صفحه اول سایت تماس بگیرید و رمز عبور دوم خود را از طریق پیامک دریافت و نسبت به غیرفعال سازی و یا دریافت دوباره بارکد اقدام کنید.
            </p>
        </div>
    )
}

export default TwoStepVerification
