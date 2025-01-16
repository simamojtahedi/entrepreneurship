import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Title from '../../../Utils/title/Title'
import { introduction } from '../../../data/Introduction/introduction'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const Introduction = () => {
    return (
        <Wrapper pageTitle="معرفی" >
            <div className="page-wrapper">
            <BreadCrumb> معرفی </BreadCrumb>
                <div className="col-md-12 mt-4 animate__animated animate__fadeIn"> 
                    <div className="col-md-8 offset-md-2 mt-5">
                        <table className="table table-bordered table-hover bg-light">
                            <thead>
                                <tr>
                                    <th className="text-center">عنـــــــوان</th>
                                    <th className="text-center">امتیــــــــــاز</th>
                                </tr>
                            </thead>
                            <tbody>
                                {introduction.map( item => (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.rate} <br /><small className="text-muted">{item.info}</small></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        </Wrapper>
    )
}

export default Introduction
