import React from 'react'
import {AiOutlineBarChart} from 'react-icons/ai'
import {GiTwoCoins} from 'react-icons/gi'
import {MdOutlineCreditScore} from 'react-icons/md'

const UserHeadInfo = () => {
    return (
        <div className='user_main_info_data'>
            <div className='user_main_info_item animate__animated animate__fadeInDown'>
                <div className='user_main_info_icon'><AiOutlineBarChart /></div>
                <div>
                    <h1>8</h1>
                    <h2>امتــیاز</h2>
                </div>
            </div>
            <div className='user_main_info_item animate__animated animate__fadeInDown'>
                <div className='user_main_info_icon'><GiTwoCoins /></div>
                <div>
                    <h1>{parseInt(300000).toLocaleString()} <span>ریال</span></h1>
                    <h2>موجودی نقــدی</h2>
                </div>
            </div>
            <div className='user_main_info_item animate__animated animate__fadeInDown'>
                <div className='user_main_info_icon'><MdOutlineCreditScore /></div>
                <div>
                    <h1>0 <span>ریال</span></h1>
                    <h2>موجودی اعتبــاری</h2>
                </div>
            </div>
        </div>
    )
}

export default UserHeadInfo