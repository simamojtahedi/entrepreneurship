import React from 'react'

const UserInvestments = () => {
    return (
        <div className='all-investments'>
           <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th>کد</th>
                        <th>عنوان</th>
                        <th>تاریخ ثبت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>عنوان</td>
                        <td>تاریخ</td>
                        <td>عملیات</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserInvestments
