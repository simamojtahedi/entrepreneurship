import React from 'react'
import { Form } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Title from '../../../Utils/title/Title'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import './style.scss'

const Consultation = () => {
    return (
        <Wrapper pageTitle=" مشاوره‌ها" >
            <div className="page-wrapper">
                <BreadCrumb>  مشاوره‌ها  </BreadCrumb>
                <Form className="adviser-search animate__animated animate__fadeIn">
                    <h6> جستجوی مشاور </h6>
                    <div className="search_items">
                        <div className="search_item">
                            <span>استان: </span>
                            <select>
                                <option>تهران</option>
                                <option>رشت</option>
                            </select>
                        </div>
                        <div className="search_item">
                            <span>شهرستان: </span>
                            <select>
                                <option>تهران</option>
                                <option>رشت</option>                            
                            </select>
                        </div>
                        <div className="search_item">
                            <span>حوزه مشاوره : </span>
                            <select>
                                <option> حقوقی </option>
                                <option> سرمایه گذاری </option>
                            </select>
                        </div>
                        <div className="search_item">
                            <span>تخصص مشاور : </span>
                            <select>
                                <option>تیم سازی</option>
                                <option>منابع انسانی</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end px-5'>
                        <button className="btn main-btn mt-4 mb-2 px-4"> جستجو </button>
                    </div>
                </Form>

                <div className="mt-5 animate__animated animate__fadeIn">
                    <Title> لیست مشاوران </Title>
                    <div> 
                        <p className="text-center my-4">مشاوری یافت نشد</p>    
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Consultation
