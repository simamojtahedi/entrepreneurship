import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCourse from './SingleCourse'
import './style.scss'

const AllCourses = () => {
    return (
       <>
        <div className="allCourses animate__animated animate__fadeIn">
            <Row>
                <SingleCourse
                    image="/assets/img/courseDefault.svg"
                    type="آنلاین"
                    title="طراحی و راه اندازی کسب و کار های کوچک"
                    teachers="سیما مجتهدی"
                    startDate="1400/4/8"
                    startHour="13:00"
                    registerDate="1400/4/8"
                    cash="0 "
                    credit="20000000"
                />
                <SingleCourse
                    image="/assets/img/courseDefault.svg"
                    type="آنلاین"
                    title="مدیریت فعالیت‌ها و پروژه"
                    teachers="سیما مجتهدی"
                    startDate="1400/4/8"
                    startHour="13:00"
                    registerDate="1400/4/8"
                    cash="0 "
                    credit="2000"
                />
                <SingleCourse
                    image="/assets/img/courseDefault.svg"
                    type="آنلاین"
                    title="مبانی کارآفرینی"
                    teachers="سیما مجتهدی"
                    startDate="1400/4/8"
                    startHour="13:00"
                    registerDate="1400/4/8"
                    cash="0 "
                    credit="20000000"
                />
            </Row>
        </div>
       </>
    )
}

export default AllCourses
