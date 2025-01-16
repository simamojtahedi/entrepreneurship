import React, { useState, useEffect } from 'react';
import { Badge, Container, Dropdown } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment-jalaali'
import './style.scss'
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import {CgBell} from 'react-icons/cg'
import {BsFillGearFill, BsPersonFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import {RiLogoutCircleRLine, RiInstagramLine, RiTelegramLine, RiTwitterLine} from 'react-icons/ri'

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Navbar = ({history}) => {
  const [showSun, setShowSun] = useState(true);
  const [badgeData, setBadgeData] = useState(2);
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setShowSun(false)
    } else {
      setTheme('light-theme');
      setShowSun(true)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Container>
      <nav className="top_navbar">
        <div className="menu_item side_menu">
          <div className='nav_calendar'>
            <span>{moment().format('jYYYY/jM/jD')}</span>
          </div>
          <Link className='nav_notif' to='/messages'>
            <CgBell />
            {badgeData > 0 &&
              <Badge className='bg-danger nav_notif_badge'>2</Badge>
            }
          </Link>
          <button className="dark_mode" onClick={toggleTheme}>
            <BsSun className={theme === 'light-theme' ? 'sun' : 'sun hide_sun'} />
            <BiMoon className={theme === 'dark-theme' ? 'moon ' : 'moon hide_moon'} />
          </button>
          <Dropdown>
            <Dropdown.Toggle id="menu-dropdown" className="dropdown_btn">
              {/* <BiUser /> */}
              <img alt="user" src='https://img.freepik.com/free-photo/glad-dark-haired-young-woman-says-sounds-good-confirms-something-everything-control-going-great-approves-promo-has-glad-expression-agrees-with-person-wears-yellow-sweatshirt_273609-42865.jpg?w=2000' />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <h4>سیما مجتهدی</h4>
                <h6><Link to="/account-info"><BsFillGearFill /> حساب کاربری</Link></h6>
                <h6><Link to="/profile"><BsPersonFill /> اطلاعات فردی</Link></h6>
                <h6><Link to="/edit-profile"><AiFillEdit /> ویرایش اطلاعات</Link></h6>
                <h6><Link to="/logout"><RiLogoutCircleRLine />خروج</Link></h6>
                <div className='dropdown-social'>
                  <a href="https://www.instagram.com" target="_blank" rel="nofollow"><RiInstagramLine /></a>
                  <a href="https://t.me" target="_blank" rel="nofollow"><RiTelegramLine /></a>
                  <a href="https://twitter.com" target="_blank" rel="nofollow"><RiTwitterLine /></a>
                </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </Container>
  )
}

export default withRouter(Navbar)