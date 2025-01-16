import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import BooksList from './BooksList'
import Followup from './Followup'
import './style.scss'
import SubmitBook from './SubmitBook'

const Library = () => {
    return (
        <Wrapper pageTitle="کتابخانه " >
        <div className="page-wrapper">
            <BreadCrumb> کتابخانه  </BreadCrumb>

            <div className="library-container mt-5 animate__animated animate__fadeIn">
                <Tabs defaultActiveKey="books-list" id="friends-tab">
                    <Tab eventKey="books-list" title="لیست کتاب‌ها">
                        <BooksList />
                    </Tab>
                    <Tab eventKey="submit-book" title="درج کتاب الکترونیک">
                        <SubmitBook />
                    </Tab>
                    <Tab eventKey="followup" title="پیگیری">
                        <Followup />
                    </Tab>
                </Tabs>
            </div>
        </div>
    </Wrapper>
    )
}

export default Library
