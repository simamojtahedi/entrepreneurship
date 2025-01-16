import React from 'react'
import { Table } from 'react-bootstrap'

const UserPoints = () => {
    return (
        <div className='user_points_table_container'>
            <h2>لیست امتــیازات شما</h2>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>کد</th>
                        <th>توضیح</th>
                        <th>مقدار</th>
                        <th>تاریخ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ثبت نام اولیه</td>
                        <td>8</td>
                        <td>1400/07/12</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>ثبت نام اولیه</td>
                        <td>8</td>
                        <td>1400/07/12</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default UserPoints
