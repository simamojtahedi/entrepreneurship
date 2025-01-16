import React from 'react'
import { Link } from 'react-router-dom'
import { teachers } from '../../../data/users/Teachers'
import './style.scss'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb';

const TeachersList = () => {
    return (
        <Wrapper pageTitle="لیست اساتید" >
            <div className="page-wrapper">
                <BreadCrumb> لیست اساتید </BreadCrumb>
                <div className="row animate__animated animate__fadeIn">
                    {teachers.map( person => (
                        <div className="col-lg-3 userContainer" key={person.id}>
                            <Link className="user" to={`/profile/${person.id}`}>
                                <img src={person.image} alt={person.name} />
                                <h1>{person.name}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default TeachersList
