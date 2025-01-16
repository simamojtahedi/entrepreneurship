import React from 'react'
import { Link } from 'react-router-dom'

const UserFriends = () => {
    return (
        <div className='user_friends_container'>
                <h2>لیست دوستــان</h2>
            <div className='user_friends'>
                <Link to='/'>
                    <img src='https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI' />
                    <h6> سیما مجتهدی </h6>
                </Link>
                <Link to='/'>
                    <img src='assets/img/person.png' />
                    <h6> سیما مجتهدی </h6>
                </Link>
                <Link to='/'>
                    <img src='assets/img/person.png' />
                    <h6> سیما مجتهدی </h6>
                </Link>
                <Link to='/'>
                    <img src='assets/img/person.png' />
                    <h6> سیما مجتهدی </h6>
                </Link>
                <Link to='/'>
                    <img src='assets/img/person.png' />
                    <h6> سیما مجتهدی </h6>
                </Link>
                <Link to='/'>
                    <img src='assets/img/person.png' />
                    <h6> سیما مجتهدی </h6>
                </Link>
                <Link to='/'>
                    <img src='assets/img/person.png' />
                    <h6> سیما مجتهدی </h6>
                </Link>
                <Link to='/'>
                    <img src='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg' />
                    <h6> سیما میرزا مجتهدی </h6>
                </Link>
                <Link to='/invite' className='invite'>
                    <i className='fa fa-plus'></i>
                    <h6> افزودن دوست </h6>
                </Link>
            </div>
        </div>
    )
}

export default UserFriends