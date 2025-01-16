import React from 'react'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import MainTable from '../../../Utils/table/MainTable'
import Wrapper from '../../../Utils/Wrapper/Wrapper'

const EvaluatorTeams = () => {
    const data = [ 
        { 
            code : '1', 
            name: 'هسته هلو', 
            main_subject: 'هلو', 
            sec_subject : 'هستش', 
            leader : 'مدیریت', 
            people: '12000',
            status: 'فعال' ,
        },
    ]

    const columns = [
        { Header: 'کد', accessor: 'code' },
        { Header: 'نام هسته', accessor: 'name' },
        { Header: 'موضوع', accessor: 'main_subject' },
        { Header: 'موضوع فرعی', accessor: 'sec_subject' },
        { Header: 'نام سرگروه', accessor: 'leader' },
        { Header: 'تعداد اعضا', accessor: 'people' },
        { Header: 'وضعیت', accessor: 'status' },
    ]

    return (
        <Wrapper pageTitle="هسته‌های کارآفرینی" >
            <div className="page-wrapper">
                <BreadCrumb> هسته‌های کارآفرینی </BreadCrumb>
                <div className='animate__animated animate__fadeIn '>
                    <div className='pt-4 mb-5' >
                        <p>
                            در این بخش هر کاربر پس از شناخت نسبی حاصل شده از دوستان یا افراد دعوت شده با سامانه و نیز پیام ارسالی در مرحله قبلی نسبت به تشکیل تیم و هسته اولیه جهت راه اندازی کسب و کار اقدام می نماید. این مرحله یکی از مهمترین ایستگاه­ها برای موفقیت در کسب و کار آتی شماست و فعالیت و مراحل شتابدهی به شما از این به بعد در قالب این هسته ها انجام خواهد گرفت.
                        </p>
                        <p>
                        برای تشکیل یک هسته جدید شما می توانید بعنوان " سرگروه" اقدام نمائید، شایان ذکر است صرفاً افرادی می توانند بعنوان سرگروه اقدام نمایند که حتما در آزمون غربالگری کارآفرینی شرکت کرده باشند، در غیر اینصورت شما می توانید بعنوان عضو گروه و براساس علاقه، توانمندی و مهارتهای خودتان در 1 یا حداکثر 2 گروه عضو شده و فعالیت کنید، بنابراین در انتخاب هسته مورد نظرتان دقت کنید.
                        </p>
                    </div>
                    <MainTable data={data} columns={columns} />
                </div>
            </div>
        </Wrapper>
    )
}

export default EvaluatorTeams
