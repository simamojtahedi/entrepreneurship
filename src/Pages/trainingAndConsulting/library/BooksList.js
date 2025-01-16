import React from 'react';
import { Form, Table } from 'react-bootstrap';
import {HiDownload} from 'react-icons/hi'

const BooksList = () => {

  return (
    <div className='books-table'>
      <div className='search-books animate__animated animate__fadeIn'>
        <h6> جستجوی کتاب </h6>
        <Form>
          <p className='text-center'> عنوان کتاب مورد نظر را وارد کنید </p>
          <div className="srarchInput">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input 
                placeholder="" 
                type="text" 
            />   
          </div> 
        </Form>            
      </div>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>کد</th>
            <th>عنوان</th>
            <th>موضوع اصلی</th>
            <th>نویسنده / مترجم / گردآورنده</th>
            <th>ناشر</th>
            <th>تاریخ چاپ</th>
            <th>فایل کتاب</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>کتاب جدید</td>
            <td>موضوع کتاب جدید</td>
            <td>نویسنده کتاب جدید</td>
            <td>ناشر کتاب جدید</td>
            <td>تاریخ کتاب جدید</td>
            <td className="download-btn"><a href="#"><HiDownload /></a></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default BooksList
