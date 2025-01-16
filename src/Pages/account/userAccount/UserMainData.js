import React from 'react'
import { Link } from 'react-router-dom'
import {FaRegEdit} from 'react-icons/fa'

const UserMainData = () => {
    return (
        <div className='user_main_info animate__animated animate__fadeInDown'>
            <Link to='/edit-profile' className='edit_info_link' ><FaRegEdit /></Link>
            <div className='user_main_info_image'>
                <div className='user_main_info_image_background'></div>
                <img alt="کاربر" src='https://img.freepik.com/free-photo/glad-dark-haired-young-woman-says-sounds-good-confirms-something-everything-control-going-great-approves-promo-has-glad-expression-agrees-with-person-wears-yellow-sweatshirt_273609-42865.jpg?w=2000' />
            </div>
            <div className='user_main_info_content'>
                <h1>سیما مجتهدی</h1>
                <Link to='/sieve' className='mt-3'>شرکت در آزمون غربالگری کار آفرینی</Link>
            </div>
            <img src='/assets/img/Tulip.svg' className='user_main_info_svg' />
        </div>
    )
}

export default UserMainData