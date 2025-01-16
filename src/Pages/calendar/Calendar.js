import React, { useState } from 'react'
import BreadCrumb from '../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../Utils/Wrapper/Wrapper'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'jalali-moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './style.scss'

moment.locale('fa');
const localizer = momentLocalizer(moment)

const CalendarPage = () => {
    const [events, setEvents] = useState({
        events: [
            {
              start: moment().toDate(),
              end: moment()
                .add(1, "days")
                .toDate(),
              title: "بررسی سامانه"
            },
            {
                start: new Date(2022, 3, 13, 10, 0, 0),
                end: new Date(2022, 3, 13, 10, 20, 0),
                title: "بررسی "
            }
          ]
    })

    return (
        <Wrapper pageTitle="تقویم آموزشی" >
            <div className="page-wrapper">
                <BreadCrumb> تقویم آموزشی </BreadCrumb>

                <div className="col-md-12 mt-5 animate__animated animate__fadeIn">
                    <Calendar
                        localizer={localizer}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={events.events}
                        messages= {{
                            allDay:"تمام روز",
                            previous:"قبلی",
                            next: "بعدی",
                            today: "امروز",
                            month:"ماه",
                            week: "هفته",
                            day: "روز",
                            agenda: "رویدادها",
                            date: "تاریخ",
                            time:"زمان",
                            event:"رویداد",
                        }}
                    />
                </div>
            </div>
        </Wrapper>
    )
}

export default CalendarPage
