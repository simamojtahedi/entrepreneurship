import React from 'react'
import { Row, Tab, Table, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import './style.scss'

const Course = () => {
  return (
    <Wrapper pageTitle="دوره" >
        <BreadCrumb><Link to="/courses"> دوره‌ها </Link> / دوره طراحی و راه اندازی کسب و کارهای کوچک </BreadCrumb>
        <Row className='single-course-container animate__animated animate__fadeIn'>
            <div className='responsive-link'><button className='btn btn-success btn-sm px-5'>خرید</button></div>
            <div className='col-lg-9 course_info'>
                <img src='assets/img/template.jpg' alt="دوره" />
                <h1>طراحی و راه اندازی کسب و کارهای کوچک</h1>

                <div className='course_data mt-5'>
                    <Tabs defaultActiveKey="info">
                        <Tab eventKey="info" title="اطلاعــات" className='course_data_tab'>
                            <div> <span>کد دوره:</span> <span>1</span> </div>
                            <div> <span>نوع دوره:</span> <span>آنلاین</span> </div>
                            <div> <span>وضعیت دوره:</span> <span>در حال ثبت نام</span> </div>
                            <div> <span>ارائه کننده:</span> <span> علی محمدی</span> </div>
                            <div> <span>ظرفیت دوره:</span> <span>5000 نفر</span> </div>
                            <div> <span>ساعات دوره:</span> <span>19 ساعت</span> </div>
                            <div> <span>سطح دوره:</span> <span>عمومی</span> </div>
                            <div> <span>زمان شروع دوره:</span> <span>۱۴۰۰/۴/۸ ۱۳:۵۳</span> </div>
                            <div> <span>زمان پایان دوره:</span> <span>۱۴۰۰/۱۲/۲۹ ۱۳:۵۳</span> </div>
                            <div> <span>مهلت ثبت نام دوره:</span> <span>۱۴۰۰/۴/۸ ۱۳:۵۳</span> </div>
                            <div> <span>پیش نیاز دوره:</span> <span>بدون پیش نیاز</span> </div>
                            <div> <span>مخاطب دوره:</span> <span>دپارتمان آموزش‌های کارآفرینی</span> </div>
                            <div> <span>ارائه برای:</span> <span>کل کشور</span> </div>
                            <div> <span>هزینه نقدی دوره:</span> <span>0 ریال</span> </div>
                            <div> <span>هزینه اعتباری دوره:</span> <span>2,000,000 ریال</span> </div>
                        </Tab>
                        <Tab eventKey="description" title="توضیحــات" className='course_data_tab'>
                            <p>شامل 40 جلسه</p>
                        </Tab>
                        <Tab eventKey="meetings" title="جلســات" className='course_data_tab'>
                            <Table bordered responsive>
                                <thead>
                                    <tr>
                                        <th>عنوان</th>
                                        <th>مدرس</th>
                                        <th>نوع جلسه</th>
                                        <th>مدت جلسه</th>
                                        <th>زمان شروع</th>
                                        <th>زمان پایان</th>
                                        <th>توضیحات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>تعریف ویژگی ها و اهمیت</td>
                                        <td>علی نقوی</td>
                                        <td>ویدیو</td>
                                        <td>30 دقیقه</td>
                                        <td>۱۴۰۰/۴/۸ ۱۴:۳۹</td>
                                        <td>۱۴۰۶/۱/۳۱ ۱۴:۳۹</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>تعریف ویژگی ها و اهمیت</td>
                                        <td>علی نقوی</td>
                                        <td>ویدیو</td>
                                        <td>30 دقیقه</td>
                                        <td>۱۴۰۰/۴/۸ ۱۴:۳۹</td>
                                        <td>۱۴۰۶/۱/۳۱ ۱۴:۳۹</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className='col-lg-3 course_link'>
                <h1>شرکت در دوره</h1>
                <div>
                    <span>مدرس دوره: </span>    
                    <p>سیما مجتهدی</p>
                </div>
                <div>
                    <span>وضعیت : </span>    
                    <p>در حال ثبت نام</p>
                </div>
                <div>
                    <span>هزینه نقدی :</span>
                    <p>0 ریال</p>
                </div>
                <div>
                    <span>هزینه اعتباری :</span>
                    <p>2,000,000 ریال</p>
                </div>
                <button className='btn btn-success'> خرید دوره </button>
            </div>
        </Row>
    </Wrapper>
  )
}

export default Course