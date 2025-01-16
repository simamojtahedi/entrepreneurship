import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import SmsInvite from './SmsInvite'
import EmailInvite from './EmailInvite'
import './style.scss'

const Invite = () => {
    return (
        <Wrapper pageTitle="دعوت از دوستان" >
            <div className="page-wrapper">
                <BreadCrumb> دعوت از دوستان </BreadCrumb>

                <div className="px-3 py-3 animate__animated animate__fadeIn">
                    <h6 className="mb-4">نحوه دعوت از دوستان و تشکیل هسته کارآفرینی :</h6>
                    <p className="px-5">چنانچه اقدام به دعوت از دوست نمایید کد دعوت تولید شده تا 24 ساعت اعتبار دارد و شما 24 ساعت فرصت دارید تا با دوست خود ارتباط برقرار کرده و ضمن توضیح خدمات سامانه، ایشان را در خصوص نحوه ثبت نام و روال تایید مشخصات کاربری در سایت راهنمایی کنید توجه داشته باشید حداکثر نفرات مجاز دعوت شده در هر سطح 5 نفر می باشد.</p>
                </div>

                <div className="inviteTabs mt-5 animate__animated animate__fadeIn">
                    <Tabs defaultActiveKey="sms" id="friends-tab">
                        <Tab eventKey="sms" title="دعوت از طریق پیامک">
                            <SmsInvite />
                        </Tab>
                        <Tab eventKey="email" title="دعوت از طریق ایمیل">
                            <EmailInvite />
                        </Tab>
                        <Tab eventKey="invited" title="لیست دعوت شده ها">
                            <p className="text-center my-5">شما هیچ دوستی ندارید !</p>   
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Wrapper>
    )
}

export default Invite
