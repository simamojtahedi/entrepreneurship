import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import MainTable from '../../../Utils/table/MainTable'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const DemoQuiz = () => {
    const data = [ 
        { 
            code : '1', 
            name: 'هسته هلو', 
            date: '1398-09-28', 
            score : '27%', 
            recieve : 'پستی', 
            16: '-',
            17: '-' ,
        },
    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام', accessor: 'name' },
        { Header: 'تاریخ آزمون', accessor: 'date' },
        { Header: 'نمره', accessor: 'score' },
        { Header: 'نوع دریافت', accessor: 'recieve' },
        { Header: 'جواب 16', accessor: '16' },
        { Header: 'جواب 17', accessor: '17' },
    ]

    return (
        <Wrapper pageTitle="مدیریت آزمون تعیین سطح" >
            <div className="page-wrapper">
                <BreadCrumb> مدیریت آزمون تعیین سطح </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
        </Wrapper>
    )
}

export default DemoQuiz
