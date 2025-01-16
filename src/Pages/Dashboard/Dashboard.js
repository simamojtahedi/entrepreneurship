import React from 'react'
import Wrapper from '../../Utils/Wrapper/Wrapper'
import Header from './Header/Header'
import {  demo, challenge_opportunity, admin, Directory, educationAndConsultants, guide, Opportunities, productIntroduction, TeamBuilding, virtualOffice } from '../../data/Dashboard/DashboardBox';
import DashboardBox from './dashboardBox/DashboardBox';
import BoxItem from './dashboardBox/boxItem/BoxItem';
import { Row } from 'react-bootstrap';
import './style.scss'
import Courses from './courses/Courses';
import Consultant from './consultants/Consultant';

const Dashboard = () => {
    return (
        <Wrapper pageTitle="داشبورد">
            <Header />
            <Row className='info-header'>
                <div className='col-lg-6'>
                    <Courses />
                </div>
                <div className='col-lg-6'>
                    <Consultant />
                </div>
            </Row>
            
            <Row><DashboardBox title="ادمین" id="admin" >
                {admin.map( item => (
                    <BoxItem
                        key={item.id}
                        image={item.image}
                        itemTitle={item.title}
                        itemLink={item.link}
                        active={item.active}
                        target= {item.target ? item.target : null}
                    />
                ))}
            </DashboardBox></Row>

            <Row><DashboardBox title="کاربر دمو" id="demo" >
                {demo.map( item => (
                    <BoxItem
                        key={item.id}
                        image={item.image}
                        itemTitle={item.title}
                        itemLink={item.link}
                        active={item.active}
                        target= {item.target ? item.target : null}
                    />
                ))}
            </DashboardBox></Row>
            
            <Row><DashboardBox title="چالش‌ها و فرصت‌ها" id="challenge_opportunity" >
                {challenge_opportunity.map( item => (
                    <BoxItem
                        key={item.id}
                        image={item.image}
                        itemTitle={item.title}
                        itemLink={item.link}
                        active={item.active}
                        target= {item.target ? item.target : null}
                    />
                ))}
            </DashboardBox></Row>

            <Row><DashboardBox title="راهنما" id="guide" >
                {guide.map( item => (
                    <BoxItem
                        key={item.id}
                        image={item.image}
                        itemTitle={item.title}
                        itemLink={item.link}
                        active={item.active}
                        target= {item.target ? item.target : null}
                    />
                ))}
            </DashboardBox></Row>

            <Row><DashboardBox title="آموزش و مشاوره" id="education" >
            {educationAndConsultants.map( item => (
                <BoxItem
                    key={item.id}
                    image={item.image}
                    itemTitle={item.title}
                    itemLink={item.link}
                    active={item.active}
                    target= {item.target ? item.target : null}
                />
            ))}
            </DashboardBox></Row>

            <Row><DashboardBox title="دفتر کار همراه" id="office" >
            {virtualOffice.map( item => (
                <BoxItem
                    key={item.id}
                    image={item.image}
                    itemTitle={item.title}
                    itemLink={item.link}
                    active={item.active}
                    payed={item.payed}
                    target= {item.target ? item.target : null}
                />
            ))}
            </DashboardBox></Row>

            <Row><DashboardBox title="تیم سازی" id="team" >
            {TeamBuilding.map( item => (
                <BoxItem
                    key={item.id}
                    image={item.image}
                    itemTitle={item.title}
                    itemLink={item.link}
                    active={item.active}
                    target= {item.target ? item.target : null}
                />
            ))}
            </DashboardBox></Row>

            <Row><DashboardBox title="فرصت‌ها" id="opportunities" >
            {Opportunities.map( item => (
                <BoxItem
                    key={item.id}
                    image={item.image}
                    itemTitle={item.title}
                    itemLink={item.link}
                    active={item.active}
                    target= {item.target ? item.target : null}
                />
            ))}
            </DashboardBox></Row>
        </Wrapper>
    )
}

export default Dashboard