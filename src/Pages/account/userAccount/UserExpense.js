import React from 'react'
import { Table } from 'react-bootstrap'

const UserExpense = () => {
  return (
    <div className='user_expense'>
        <h2> لیست دریافت و پرداخت‌ها </h2>
        <div className='user_expense_table'>
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
              <td>123</td>
              <td>خرید بسته سوم از چپ</td>
              <td>123000 تومان</td>
              <td>1400/07/02</td>
            </tr>
            <tr>
              <td>123</td>
              <td>خرید بسته دوم از راست</td>
              <td>123000 تومان</td>
              <td>1400/07/02</td>
            </tr>
          </tbody>
        </Table>
        </div>
    </div>
  )
}

export default UserExpense