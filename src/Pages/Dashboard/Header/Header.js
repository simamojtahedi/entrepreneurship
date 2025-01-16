import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { FiInfo, FiUsers } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { GiDesk } from 'react-icons/gi'
import { BsFillGearFill, BsShop } from 'react-icons/bs'
import { FaRegFolderOpen } from 'react-icons/fa'
import { IoSchoolOutline, IoChatboxEllipsesOutline } from 'react-icons/io5'

const Header = () => {
    const [cash, setCash] = useState(50000)

  return (
    <Row className='dashboard_header'>
        <div className='col-lg-8 header_data'>
            <Row>
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                   <a href="#guide"> 
                        <FiInfo />
                        <span>راهنمــا</span>   
                    </a>
                </div>  
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                    <a href="#education"> 
                        <IoSchoolOutline />
                        <span>آمــوزش و مشــاوره</span>   
                    </a>
                </div>            
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                   <a href="#office"> 
                        <GiDesk />
                        <span>دفتــرکار مجازی</span>   
                    </a>
                </div>            
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                   <a href="#team"> 
                        <FiUsers />
                        <span>تیــم سازی</span>   
                    </a>
                </div>            
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                   <a href="#product"> 
                        <BsShop />
                        <span>معرفی محصــول</span>   
                    </a>
                </div>            
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                   <a href="#directory"> 
                        <FaRegFolderOpen />
                        <span>دایرکتــوری</span>   
                    </a>
                </div>   
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                   <a href="#opportunities"> 
                        <MdOutlineTravelExplore />
                        <span>فرصــت‌ها </span>   
                    </a>
                </div>   
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                   <Link to="/forum"> 
                        <IoChatboxEllipsesOutline />
                        <span>تالار گفتــگو</span>   
                    </Link>
                </div>   
                <div className='col-lg-4 header_card_data animate__animated animate__fadeInDown'>
                   <Link to="/account-info"> 
                        <BsFillGearFill />
                        <span>حساب کــاربری</span>   
                    </Link>
                </div>            
            </Row>           
        </div>
        <div className='col-lg-4 header_info animate__animated animate__fadeIn'>
            <Link to='/account-info' className='account_link'><BsFillGearFill /></Link>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='header_info_image'>
                    <div className='header_image_background'></div>
                    <img alt="کاربر" src='https://img.freepik.com/free-photo/glad-dark-haired-young-woman-says-sounds-good-confirms-something-everything-control-going-great-approves-promo-has-glad-expression-agrees-with-person-wears-yellow-sweatshirt_273609-42865.jpg?w=2000' />
                </div>
                <h1>سیما مجتهدی</h1>
                <p className='text-center'>
                    شما آزمون غربالگری کارآفرینی را انجام نداده‌اید، برای انجام آزمون  <Link to='/sieve'> اینجا </Link>کلیک کنید.
                </p>
            </div>
            <div className='header_info_content'>
                <div><span>امتیاز: </span><span>0</span></div>
                <div><span>اعتبار نقدی: </span><span>{parseInt(cash).toLocaleString()} تومان </span></div>
                <div><span>اعتبار امتیازی: </span><span>0</span></div>
                <Link to='/virtual-office' className='normal-btn btn btn-warning mt-3'>خرید بسته اعتباری</Link>
            </div>
        </div>
    </Row>
  )
}

export default Header