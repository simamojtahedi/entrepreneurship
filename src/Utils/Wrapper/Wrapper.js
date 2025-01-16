import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import {Helmet} from "react-helmet";
import { Redirect } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './style.scss'
import {IoIosArrowUp} from 'react-icons/io'

const Wrapper = (props) => {
  const user = localStorage.getItem('user')

  if (user) {
    return (
      <div className='wrapper'>
        <Helmet>
          <title>{props.pageTitle ? props.pageTitle : 'داشبورد'}</title>
        </Helmet>
        <Sidebar />
        <div className='dashboard_content_wrapper'>
          <Navbar />
          <div className='dashboard_content'>
            <Container>
              {props.children}  
            </Container> 
          </div>
        </div>
        <ScrollToTop smooth top='500' component={<IoIosArrowUp />} />
      </div>
    )
  } else {
    return <Redirect to="/login" />
  }
}

export default Wrapper