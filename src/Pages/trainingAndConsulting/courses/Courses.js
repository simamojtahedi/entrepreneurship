import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import AllCourses from './allCourses/AllCourses'
import Search from './search/Search'

const Courses = () => {
    return (
        <Wrapper pageTitle="دوره‌های آموزشی" >
            <div className="page-wrapper">
                <BreadCrumb>دوره‌های آموزشی</BreadCrumb>

                <div className="col-md-12">
                    <Search />
                </div>
                <AllCourses />
            </div>
        </Wrapper>
    )
}

export default Courses
