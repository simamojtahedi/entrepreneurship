import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../Utils/breadcrumb/BreadCrumb'
import { MdVideocam, MdAddIcCall, MdEmail } from "react-icons/md";
import Wrapper from '../../Utils/Wrapper/Wrapper';
import './style.scss'

import {BsPersonSquare, BsPersonCircle} from 'react-icons/bs'

const ContactUs = () => {
    return (
        <Wrapper pageTitle="ارتباط با ما" >
            <div className="page-wrapper">
                <BreadCrumb> ارتباط با ما </BreadCrumb>
                <div className="contactList">
                    <div className="contactInfo animate__animated animate__fadeInDown">
                        <BsPersonSquare className='contact-image' />
                        <h6> مدیر سامانه </h6>
                        <span>انتقادات و پیشنهادات</span>
                        <div className="contactWays">
                            <Link to="/"><MdEmail/></Link>
                            <Link to="/"><MdAddIcCall/></Link>
                            <Link to="/"><MdVideocam/></Link>
                        </div>
                    </div>
                    <div className="contactInfo animate__animated animate__fadeInDown">
                        <BsPersonCircle className='contact-image' />
                        <h6> پشتیبان فنی </h6>
                        <span>سوالات و مشکلات فنی</span>
                        <div className="contactWays">
                            <Link to="/"><MdEmail/></Link>
                            <Link to="/"><MdAddIcCall/></Link>
                            <Link to="/"><MdVideocam/></Link>
                        </div>
                    </div>
                    <div className="contactInfo animate__animated animate__fadeInDown">
                        <BsPersonCircle className='contact-image' />
                        <h6> پشتیبان مشاوره </h6>
                        <span>سوالات و مشکلات مشاوره</span>
                        <div className="contactWays">
                            <Link to="/"><MdEmail/></Link>
                            <Link to="/"><MdAddIcCall/></Link>
                            <Link to="/"><MdVideocam/></Link>
                        </div>
                    </div>
                    <div className="contactInfo animate__animated animate__fadeInDown">
                        <BsPersonCircle className='contact-image' />
                        <h6> پشتیبان آموزشی </h6>
                        <span>سوالات و مشکلات آموزشی</span>
                        <div className="contactWays">
                            <Link to="/"><MdEmail/></Link>
                            <Link to="/"><MdAddIcCall/></Link>
                            <Link to="/"><MdVideocam/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ContactUs
