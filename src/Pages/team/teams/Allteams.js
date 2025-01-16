import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './style.scss'

const teams = [
    {
        id: '1',
        name: 'فناوری‌های کشاورزی',
        subject: 'ایجاد فناوری‌های مناسب کشاورزی',
        subSubject: ' ایجاد فناوری‌های مناسب کشاورزی و بررسی موانع و کاربردها ',
        master: 'رضا محمودوند',
        partners: '234',
        evaluation: '100',
        condition: true
    },
]

const Allteams = () => {
    const [search, setSearch] = useState("")

    return (
        <div className="allTeams mt-5 animate__animated animate__fadeIn">
            <div className="col-md-12 search-contaier">
                <h6> جستجو در هسته ها </h6>
                <Form>
                    <p className='text-center'> نام هسته مورد نظر را وارد کنید : </p>
                    <div className="srarchInput">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input 
                            placeholder="" 
                            type="text" 
                            value={search} 
                            onChange={ e => setSearch(e.target.value)} 
                        />   
                    </div> 
                </Form>     
            </div>
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th>کد</th>
                        <th>نام هسته</th>
                        <th>موضوع</th>
                        <th>موضوع فرعی</th>
                        <th>نام سرگروه</th>
                        <th>تعداد اعضا</th>
                        <th>ارزیابی</th>
                        <th>وضعیت</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.length ? 
                        teams.map( team => (
                            <tr key={team.id}>
                                <td>{team.id}</td>
                                <td>{team.name}</td>
                                <td>{team.subject}</td>
                                <td>{team.subSubject}</td>
                                <td>{team.master}</td>
                                <td>{team.partners}</td>
                                <td>{team.evaluation}</td>
                                <td>{team.condition ? "فعال" : "غیرفعال"}</td>
                            </tr>
                        ))
                    : 
                        <p className="text-center nodata">هسته‌ای موجود نیست</p>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Allteams
