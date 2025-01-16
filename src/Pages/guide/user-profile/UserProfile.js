import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import './style.scss'
import { FaUserFriends} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import Confirm from '../../../Utils/tooltip/Confirm'

const UserProfile = () => {
    const [show, setShow] = useState(false)
    const confirm = () => { setShow(true) }
    const close = () => { setShow(false) }
    const submit = () => {
        setShow(false)
        alert('باشه چشم')
    }


    return (
        <Wrapper pageTitle="پروفایل کاربر">
            <div className="page-wrapper">
                <BreadCrumb> پروفایل کاربر </BreadCrumb>

                <div className="col-md-12 userProfile animate__animated animate__fadeIn">
                    <div className="userProfileImage" style={{backgroundImage: "url(/assets/img/template.jpg)"}}>
                        <h1>سیما مجتهدی</h1>
                        <h6>استــاد</h6>
                        <div className="userImage">
                            <div className='header_image_background'></div>
                            <img alt="کاربر" src='https://img.freepik.com/free-photo/glad-dark-haired-young-woman-says-sounds-good-confirms-something-everything-control-going-great-approves-promo-has-glad-expression-agrees-with-person-wears-yellow-sweatshirt_273609-42865.jpg?w=2000' />
                        </div>
                    </div>
                    <div className="userProfileConent">
                        <div className="col-md-12 offset-md-0 my-3 userProfileItems">
                            <div className="userProfileItem">
                                <span> نام مستعار: </span><span> سیما مجتهدی </span>
                            </div>
                            <div className="userProfileItem">
                                <span> مدرک تحصیلی: </span><span> لیسانس </span>
                            </div>
                            <div className="userProfileItem">
                                <span> شهر: </span><span> تهران </span>
                            </div>
                            <div className="userProfileItem">
                                <span> تولد: </span><span> شنبه 7 مهر ماه 1375  (25 سال) </span>
                            </div>
                            <div className="userProfileItem">
                                <span> تاریخ عضویت: </span><span> 19 تیر 1400 </span>
                            </div>
                            <div className="userProfileItem">
                                <span> آخرین ورود: </span><span> 11 آبان 1400 </span>
                            </div>
                        </div>
                    </div>
                    <div className='userEditNavbar'>
                        <Link to='/messages'><BiMessageSquareDetail /> ارسال پیام</Link>
                        <Confirm 
                            title='به‌عنوان دوست افزوده شود ؟' 
                            confirm={confirm} 
                            button={
                                <><FaUserFriends /> افزودن دوست </>
                            }
                            show={show} 
                            close={close}
                            submit={submit}
                        />
                    </div>
                </div>
                <div className='userPosts'>
                    <p className="text-center my-4">کاربر تاکنون مطلبی منتشر نکرده است</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default UserProfile
