import React, { useState } from 'react'
import './style.scss'

const EditModal = () => {
    const [modal,setModal] = useState(true)

    const modalHandler = () => {
        setModal(false)
    }

    return (
        <div className={modal ? "modal fade show showModal" : "modal fade"} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">نکات مهم ویرایش پرونده</h5>
                        <button type="button" onClick={modalHandler} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p> تمامی فیلدها حتما باید به زبان فارسی تکمیل شوند.</p>
                        <hr />
                        <p>از آنجا که منبع تعیین مشخصات فردی کاربر جهت صدور کارت یا مدرک پایان دوره اطلاعات این قسمت می باشد لذا مسئولیت هر گونه اشتباه و یا اشکال در ورود اطلاعات بعهده خود کاربر می باشد و 8 امتیاز در صورت تکمیل و تایید پروفایل برای شما لحاظ خواهد شد.</p>
                        <hr/>
                        <p>بهتر است رمز عبور خود را ترکیبی از حروف و عدد در نظر بگیرید. چنانچه رمز عبور خود را فراموش کردیده اید از بخش فراموشی رمز عبور استفاده کنید و یا با واحد پشتیبانی آنلاین تماس بگیرید.</p>
                        <hr />
                        <p>تمامی اطلاع رسانی به کاربران از طریق پیامک و یا ایمیل انجام خواهد گرفت لذا در ورود شماره همراه و آدرس ایمیل خود دقت فرمایید.</p>
                        <hr />
                        <p>جهت تایید مشخصات کاربری شما حتما باید تصویر کارت ملی و شناسنامه خودرا ارسال نمایید دقت داشته باشید تصاویر اسکن اولیه باشد وتوسط نرم افزارهای تدوین عکس دستکاری نشده باشد . چنانچه کاربر دستگاه اسکنر در منزل نداشته باشد می تواند با استفاده از دوربین موبایل از اصل مدارک عکس گرفته و آن را برای سامانه ارسال نماید بدیهی است که عکس کپی مدارک مورد تایید نمی باشد.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal
