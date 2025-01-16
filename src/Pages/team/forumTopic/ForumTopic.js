import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const ForumTopic = () => {
    return (
        <Wrapper pageTitle="تالار" >
            <div className="page-wrapper">
                <BreadCrumb><Link to="/forum"> تالار گفتگو </Link> / تالار </BreadCrumb>
                <div className="mt-5 animate__animated animate__fadeIn">
                    <table className="table table-bordered table-hover bg-light">
                        <thead>
                            <tr>
                                <th>عنوان</th>
                                <th>تعداد بازدید</th>
                                <th>نوشته‌ها</th>
                                <th>تاریخ</th>
                                <th>توسط</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody> */}
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}

export default ForumTopic
