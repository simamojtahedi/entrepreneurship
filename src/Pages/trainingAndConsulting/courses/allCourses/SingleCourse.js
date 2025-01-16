import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const SingleCourse = (props) => {
    return (
        <div className="col-lg-4 p-3">
            <div className="courseContainer">
               <div className="SingleCourseImage">
                   <img src={props.image} alt="دوره" />
                </div>
                <span className="courseStatus">{props.type}</span>
                <h1>{props.title}</h1>
                <div className="courseItemsContainer">
                    <div className="courseItem">
                        <span>مدرسین:</span>
                        <p><span> {props.teachers} </span></p>
                    </div>
                    <div className="courseItem">
                        <span>تاریخ شروع:</span>
                        <p><span> {props.startDate} </span> - <span> {props.startHour} </span></p>
                    </div>
                    <div className="courseItem">
                        <span>مهلت ثبت نام:</span>
                        <p><span> {props.registerDate} </span></p>
                    </div>
                    <div className="courseItem">
                        <span>هزینه نقدی:</span>
                        <p><span> {parseInt(props.cash).toLocaleString()} </span> ریال</p>
                    </div>
                    <div className="courseItem">
                        <span>هزینه اعتباری:</span>
                        <p><span> {parseInt(props.credit).toLocaleString()} </span> ریال</p>
                    </div>
                </div>
                <Link to="/course" className="btn main-btn d-grid mt-4"> مشاهده دوره </Link>
            </div>
        </div>
    )
}

export default SingleCourse
