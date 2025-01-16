import React from 'react'
import { allPackages } from '../../../data/Account/AccountData'
import {BiCoinStack} from 'react-icons/bi'
import {MdCreditScore} from 'react-icons/md'

const UserPackages = () => {
  return (
    <div className='user_packages'>
        <h2> خرید بستــه </h2>
        <div className='packages'>
            {allPackages.map(item => (
                <div className='user_pack' key={item.id}>
                    <div className='user_pack_title'>
                        <h3>{item.title}</h3>
                        <span> بسته {item.title} سامانه</span>
                    </div>
                    <div className='user_pack_data'>
                        <BiCoinStack />
                        <div>
                            <h5>{parseInt(item.cash).toLocaleString()} <span>ریال </span></h5>
                            <h6>قیــمت</h6>
                        </div>
                    </div>
                    <div className='user_pack_data'>
                        <MdCreditScore />
                        <div>
                            <h5>{parseInt(item.credit).toLocaleString()} <span>ریال </span></h5>
                            <h6>اعتــبار</h6>
                        </div>
                    </div>
                    <button className='btn'> خرید </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserPackages