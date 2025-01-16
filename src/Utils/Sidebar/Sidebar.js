import React, {useState} from 'react'
import { Button, Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style.scss'
import {FaHome} from 'react-icons/fa'
import {GiDesk} from 'react-icons/gi'
import {BsCalendarWeek} from 'react-icons/bs'
import {IoSchoolOutline, IoChatboxEllipsesOutline} from 'react-icons/io5'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'
import {CgLoadbarSound} from 'react-icons/cg'
import {RiLogoutCircleRLine} from 'react-icons/ri'

const Sidebar = () => {
    const [show, setShow] = useState(true)

  return (
    <>
    <div className='show-sidebar' onClick={() => setShow(!show)}><CgLoadbarSound /></div>
    <div className={show ? 'sidebar' : 'sidebar show_sidebar'}>
        <a href='/'><img src='/assets/img/logo.png' alt="Site Logo" /></a>
        <Offcanvas.Body className="sidebar_nav" >
            <NavLink activeClassName="sidebar_active" exact to="/" className="sidebar_link">
                <OverlayTrigger  placement="left" overlay={<Tooltip > داشبورد </Tooltip>} >
                    <Button><FaHome /></Button>
                </OverlayTrigger>
            </NavLink>
            <NavLink activeClassName="sidebar_active" to="/virtual-office" className="sidebar_link">
                <OverlayTrigger placement="left" overlay={<Tooltip > دفترکار مجازی </Tooltip>} >
                    <Button><GiDesk /></Button>
                </OverlayTrigger>
            </NavLink>
            <NavLink activeClassName="sidebar_active" to="/calendar" className="sidebar_link">
                <OverlayTrigger placement="left" overlay={<Tooltip > تقویم آموزشی </Tooltip>} >
                    <Button><BsCalendarWeek /></Button>
                </OverlayTrigger>
            </NavLink>
            <NavLink activeClassName="sidebar_active" to="/courses" className="sidebar_link">
                <OverlayTrigger placement="left" overlay={<Tooltip > دوره‌های آموزشی </Tooltip>} >
                    <Button><IoSchoolOutline /></Button>
                </OverlayTrigger>
            </NavLink>
            <NavLink activeClassName="sidebar_active" to="/consultation" className="sidebar_link">
                <OverlayTrigger placement="left" overlay={<Tooltip > مشاوره </Tooltip>} >
                    <Button><HiOutlineLightBulb /></Button>
                </OverlayTrigger>
            </NavLink>
            <NavLink activeClassName="sidebar_active" to="/forum" className="sidebar_link">
                <OverlayTrigger placement="left" overlay={<Tooltip > تالار گفتگو </Tooltip>} >
                    <Button><IoChatboxEllipsesOutline /></Button>
                </OverlayTrigger>
            </NavLink>
            <NavLink activeClassName="sidebar_active" to="/contact-us" className="sidebar_link">
                <OverlayTrigger placement="left" overlay={<Tooltip > ارتباط با ما </Tooltip>} >
                    <Button><BiPhoneCall /></Button>
                </OverlayTrigger>
            </NavLink>
            <NavLink activeClassName="sidebar_active" to="/logout" className="sidebar_link">
                <OverlayTrigger placement="left" overlay={<Tooltip > خروج </Tooltip>} >
                    <Button><RiLogoutCircleRLine /></Button>
                </OverlayTrigger>
            </NavLink>
        </Offcanvas.Body>
    </div>
    </>
  )
}

export default Sidebar