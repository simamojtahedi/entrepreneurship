import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import { Link } from 'react-router-dom';
SwiperCore.use([Pagination]);

const Courses = () => {
    const [courses, setCourses] = useState(true)

  return (
    <div className='courses'>
        <h5>دوره های شما</h5>
        {courses ?
            <Swiper 
                spaceBetween={1} 
                pagination={{ "clickable": true }}
                updateOnWindowResize= {true}
                breakpoints={{
                    640: {
                    slidesPerView: 1,
                    },
                    990: {
                    slidesPerView: 2,
                    },
                }}
                >
                <SwiperSlide>
                    <Link className="carouselCard" to="/courses">
                        <div className="carouselContent">
                            <div className="carouselImage">
                                <img src="/assets/img/courseDefault.svg" alt="دوره" />
                            </div>
                            <h6>تیم‌سازی، کار تیمی و ساختار منابع انسانی</h6>
                            <div className="carouselContentItem">
                                <span>تاریخ شروع: </span><span>1400/8/1</span>
                            </div>
                            <div className="carouselContentItem">
                                <span>مدرسین: </span><span>سیما مجتهدی </span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className="carouselCard" to="/courses">
                        <div className="carouselContent">
                            <div className="carouselImage">
                                <img src="/assets/img/courseDefault.svg" alt="دوره" />
                            </div>
                            <h6>تیم‌سازی، کار تیمی و ساختار منابع انسانی</h6>
                            <div className="carouselContentItem">
                                <span>تاریخ شروع: </span><span>1400/8/1</span>
                            </div>
                            <div className="carouselContentItem">
                                <span>مدرسین: </span><span>سیما مجتهدی </span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className="carouselCard" to="/courses">
                        <div className="carouselContent">
                            <div className="carouselImage">
                                <img src="/assets/img/courseDefault.svg" alt="دوره" />
                            </div>
                            <h6>تیم‌سازی، کار تیمی و ساختار منابع انسانی</h6>
                            <div className="carouselContentItem">
                                <span>تاریخ شروع: </span><span>1400/8/1</span>
                            </div>
                            <div className="carouselContentItem">
                                <span>مدرسین: </span><span>سیما مجتهدی </span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className="carouselCard" to="/courses">
                        <div className="carouselContent">
                            <div className="carouselImage">
                                <img src="/assets/img/courseDefault.svg" alt="دوره" />
                            </div>
                            <h6>تیم‌سازی، کار تیمی و ساختار منابع انسانی</h6>
                            <div className="carouselContentItem">
                                <span>تاریخ شروع: </span><span>1400/8/1</span>
                            </div>
                            <div className="carouselContentItem">
                                <span>مدرسین: </span><span>سیما مجتهدی </span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        :
            <p className='text-center my-5'> شما در دوره‌ای شرکت نکرده‌اید</p>
        }
        
    </div>
  )
}

export default Courses