import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Utils/breadcrumb/BreadCrumb'
import Title from '../../Utils/title/Title';
import { virtualOffice } from '../../data/Dashboard/DashboardBox';
import { packages } from '../../data/package/packages';
import BoxItem from '../Dashboard/dashboardBox/boxItem/BoxItem';
import DashboardBox from '../Dashboard/dashboardBox/DashboardBox';
import Wrapper from '../../Utils/Wrapper/Wrapper';
import './style.scss'
import PhoneNumber from '../../Utils/modal/PhoneNumber';

const VirtualOffice = () => {
    const [show, setShow] = useState(false);
    const [packId, setPackId] = useState('');

    const showNumbers = (id) => { 
        setShow(true)
        setPackId(id)
     }
    const hideNumbers = () => { setShow(false) }

    return (
        <Wrapper pageTitle="دفتر کار مجازی">
            <div className="page-wrapper">
                <BreadCrumb> دفتر کار مجازی </BreadCrumb>

                <DashboardBox title="سرویس‌ها" >
                    {virtualOffice.map( item => (
                        <BoxItem
                            key={item.id}
                            image={item.image}
                            itemTitle={item.title}
                            itemLink={item.link}
                            active={item.active}
                        />
                    ))}
                </DashboardBox>

                <div className="my-5 pb-4"> 
                    <Title>وضعیت بسته های فعلی</Title>
                    <p className="text-center my-4">
                    در حال حاضر شما هیج بسته ای خریداری نکرده اید
                    </p>
                </div>

                <div className="my-5 pb-4 servises-info"> 
                    <Title>سرویس‌ها</Title>
                    <div>
                        <h6> اس ام اس</h6>
                        <p>با استفاده از پنل قدرتمند و هوشمند اس ام اس، پیامک انبوه متنی و صوتی ارسال کنید و سایت یا کسب و کارتان را به ابزار قدرتمند منشی پیامکی، نظرسنجی، نوبت دهی و… مجهز کنید. قابلیت خرید و خدماتی کردن خط اختصاصی، وب سرویس، ارسال براساس الگو(پترن) از سایر ویژگی­های مهم این پنل است.</p>
                    </div>
                    <div>
                        <h6> برد</h6>
                        <p>بهره برداری از پنل اختصاصی نرم افزار دورکاری بومی و فارسی شده برد (معادل ترلو) بدون مشکل اتصال و تحریم با ... گیگ فضای اختصاصی با قابلیت اتصال و یکپارچه سازی با پیام رسان بومی مربوطه!</p>
                    </div>
                    <div>
                        <h6> میت</h6>
                        <p>جلسات خود را بصورت مجازی و بصورت صوتی، تصویری و متنی با کیفیت بالا در پلتفرم ما برگزار و ضبط کنید!</p>
                    </div>
                    <div>
                        <h6> لاین</h6>
                        <p>بهره برداری از خط تلفن اختصاصی 8 رقمی تهران با سرشماره 3 بصورت دو طرفه با تعداد کانال نامحدود و بدون اشغالی!</p>
                    </div>
                    <div>
                        <h6> فکس</h6>
                        <p>بهره برداری از پنل ارسال و دریافت فکس اینترنتی روی خطوط تلفنی اختصاصی شما!</p>
                    </div>
                    <div>
                        <h6> ویس</h6>
                        <p>بهره برداری از یک مرکز تماس حرفه ای با امکان گزارش­گیری، ایجاد داخلی و صف، انتقال تماس ها به داخلی و شماره بیرونی، ضبط خودکار تماس ها و ده­ها امکان دیگر بدون نیاز به نرم افزار و سخت افزار!</p>
                    </div>
                    <div>
                        <h6> آفیس</h6>
                        <p>بهره مندی از خدمات منشی اختصاصی بصورت مشترک با ده شرکت دیگر با خدماتی از جمله دریافت و ارسال تماس­ها تنظیم برنامه و جلسات، پاسخگوئی به تماس­های مهم و برقراری تماس­های مهم توسط اپراتور فیزیکی!</p>
                    </div>
                </div>

                <div className="mt-5">
                    <Title>بسته‌ها و تعرفه‌های دفتر کار همراه</Title>
                    <div className="row">
                        {packages.map( pack => (
                            <div key={pack.id} className="col-lg-4 p-3 package_container" > 
                                <div className="package" style={{ boxShadow: `0 0 1px 1px ${pack.borderColor}` }} >
                                    <div className="package_title" style={{background: pack.titleColor}}>{pack.title}</div>
                                    <div className="package_items">
                                        <div className='pack_info_item'>
                                            <div>
                                                <span> اس ام اس </span>
                                                {pack.sms ? <img src="./assets/img/icons/true.png" alt="دارد" /> : <img src="./assets/img/icons/false.png" alt="ندارد"/> }
                                            </div>
                                            {pack.smsInfo && <p>{pack.smsInfo}</p>}
                                        </div>
                                        <div className='pack_info_item'>
                                            <div>
                                                <span> برد </span>
                                                {pack.board ? <img src="./assets/img/icons/true.png" alt="دارد" /> : <img src="./assets/img/icons/false.png" alt="ندارد"/> }
                                            </div>
                                            {pack.boardInfo && <p>{pack.boardInfo}</p>}
                                        </div>
                                        <div className='pack_info_item'>
                                            <div>
                                                <span> میت </span>
                                                {pack.meet ? <img src="./assets/img/icons/true.png" alt="دارد" /> : <img src="./assets/img/icons/false.png" alt="ندارد"/> }
                                            </div>
                                            {pack.meetInfo ? <p>{pack.meetInfo}</p> : <br />}
                                        </div>
                                        <div className='pack_info_item'>
                                            <div>
                                                <span> لاین </span>
                                                {pack.line ? <img src="./assets/img/icons/true.png" alt="دارد" /> : <img src="./assets/img/icons/false.png" alt="ندارد"/> }
                                            </div>
                                            {pack.lineInfo ? <p>{pack.lineInfo}</p> : <br />}
                                        </div>
                                        <div className='pack_info_item'>
                                            <div>
                                                <span> فکس </span>
                                                {pack.fax ? <img src="./assets/img/icons/true.png" alt="دارد" /> : <img src="./assets/img/icons/false.png" alt="ندارد"/> }
                                            </div>
                                            {pack.faxInfo ? <p>{pack.faxInfo}</p> : <br />}
                                        </div>
                                        <div className='pack_info_item'>
                                            <div>
                                                <span> ویس </span>
                                                {pack.voice ? <img src="./assets/img/icons/true.png" alt="دارد" /> : <img src="./assets/img/icons/false.png" alt="ندارد"/> }
                                            </div>
                                            {pack.voiceInfo ? <p>{pack.voiceInfo}</p> : <br />}
                                        </div>
                                        <div className='pack_info_item'>
                                            <div>
                                                <span> آفیس </span>
                                                {pack.office ? <img src="./assets/img/icons/true.png" alt="دارد" /> : <img src="./assets/img/icons/false.png" alt="ندارد"/> }
                                            </div>
                                            {pack.officeInfo ? <p>{pack.officeInfo}</p> : <br />}
                                        </div>
                                    </div>
                                    <div className="package_price">
                                        <div><span>مبلغ اعتبار ماهانه: </span><span>{pack.credit.toLocaleString()} ریال</span></div>
                                        <div><span>مبلغ نقدی ماهانه: </span><span>{pack.cash.toLocaleString()} ریال</span></div>
                                        {pack.chooseNumber ?
                                            <button className="btn main-btn d-grid" onClick={() => {showNumbers(pack.id)}}>انتخاب خط تلفن</button>
                                        :
                                            <Link className="btn main-btn d-grid" to="/"> خرید بسته </Link>
                                        }
                                    </div>
                                </div> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <PhoneNumber show={show} close={hideNumbers} id={packId} />
        </Wrapper>
    )
}

export default VirtualOffice
