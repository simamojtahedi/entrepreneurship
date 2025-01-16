import React from 'react'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './style.scss'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb';

const Roadmap = () => {

  return (
    <Wrapper pageTitle="نقشه راه" >
        <div className="page-wrapper">
            <BreadCrumb> نقشه راه </BreadCrumb>
            <div className='roadmap-slider animate__animated animate__fadeIn'>
            <Swiper
                direction={"vertical"}
                pagination={{ clickable: true }}
                modules={[ Pagination ]}
                className="roadmap"
                slidesPerView= '1'
            >
                <SwiperSlide style={{background: 'url(assets/img/screening.jpg)'}}>
                    <h1>غربالگری</h1>
                    <h2>شرکت در آزمون غربالگری</h2>
                    <p> در اولین گام با شرکت در آزمون غربالگری، مهارت‌های کارآفرینانه‌ی شخصیت شما مشخص می‌شوند.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/class.jpg)'}}>
                    <h1>دوره‌های آموزشی</h1>
                    <h2>شرکت در دوره‌های آموزشی</h2>
                    <p> با شرکت در دوره‌های آموزشی، مهارت‌های مورد نیاز خود را فرا گرفته و برای شرکت در رویدادها آماده می‌شوید.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/team.jpg)'}}>
                    <h1>تیم‌سازی</h1>
                    <h2>تیم‌سازی و تشکیل هسته‌ی استارت‌آپ</h2>
                    <p> از میان افراد دیگر حاضر در پلتفرم به همکاریابی، تیم‌سازی و تشکیل هسته‌ی استارت‌آپ خود خواهید پرداخت.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/idea-review.jpg)'}}>
                    <h1>ارزیابی ایده</h1>
                    <h2>ارزیابی ایده و برنامه‌ی کسب‌وکار</h2>
                    <p> به کمک کارشناسان، مربیان و مشاوران ما، ایده و برنامه‌ی کسب‌وکارتان ارزیابی شده و به شما راهکارهای عملی برای ارتقای آن ارائه خواهد شد.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/reservoir.jpg)'}}>
                    <h1>مخزن سرمایه</h1>
                    <h2>حضور در مخزن سرمایه</h2>
                    <p>  سرمایه، ایده‌ی خود را برای سرمایه‌گذاران ارائه کرده و از انواع سرمایه‌ی موجود برای ایده‌تان مطلع خواهید شد.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/mentor.jpg)'}}>
                    <h1>مشاوره و منتورینگ</h1>
                    <h2>بهره‌مندی از مشاوره و منتورینگ</h2>
                    <p> در تمام طول این مسیر از خدمات مشاوره و منتورینگ ما برای ارتقای سطح ایده و کسب‌وکار خود بهره‌مند خواهید شد.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/presentation.jpg)'}}>
                    <h1>رویداد ارائه</h1>
                    <h2>شرکت در رویداد ارائه (Demo Day) </h2>
                    <p> با تیم خود در رویداد ارائه شرکت کرده و ایده‌ی خود را که حالا با کمک مشاوران ما به شکل یک برنامه‌ی کسب‌وکار مدون درآمده است برای سرمایه‌گذاران ارائه خواهید کرد.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/finance.jpg)'}}>
                    <h1>تسهیلات اعتباری</h1>
                    <h2>بهره‌مندی از تسهیلات اعتباری</h2>
                    <p> از تسهیلات اعتباری سرمایه‌گذاران برای راه‌اندازی کسب‌وکارتان بهره‌مند خواهید شد.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/workspace-2.jpg)'}}>
                    <h1>دفترکار مجازی</h1>
                    <h2>بهره‌مندی از دفتر کار مجازی</h2>
                    <p> دفتر کار مجازی شامل ارائه‌ی خدمات پیامک، ایمیل، فکس، خط تلفن، مدیریت وظایف تیم، مدیریت پروژه و فضای ابری و ... بهره‌مند خواهید شد. </p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/shop.jpg)'}}>
                    <h1>فروشگاه مجازی</h1>
                    <h2>ارائه‌ی محصولات در نمایشگاه و فروشگاه مجازی</h2>
                    <p> کسب‌وکار خود را در نمایشگاه و فروشگاه مجازی برای خریداران ارائه خواهید کرد.</p>
                </SwiperSlide>
                <SwiperSlide style={{background: 'url(assets/img/workspace.jpg)'}}>
                    <h1>فضای کار اشتراکی</h1>
                    <h2>بهره‌مندی از خدمات فضای کار اشتراکی</h2>
                    <p> اشتراکی شامل میزکار اشتراکی، اتاق کنفرانس، اتاق جلسات و ... در مراکز تمام استان ها برای کسب‌وکار خود بهره‌مند خواهید شد.</p>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </Wrapper>
  )
}

export default Roadmap