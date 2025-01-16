import React, { useState } from 'react'
import { Col, Form, Row, Table } from 'react-bootstrap'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import './style.scss'

const Entrepreneurship = () => {
  const [hasData] = useState(false)

  return (
    <Wrapper pageTitle="فرصت‌های کارآفرینی" >
      <div className="page-wrapper">
        <BreadCrumb> فرصت‌های کارآفرینی </BreadCrumb>
        <Row className='animate__animated animate__fadeIn'>
          <div className="col-lg-6 mt-4"> 
            <div className='filters-contaier'>
              <h6> فیلترها </h6>
              <Form className='filters'>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="province">استان</Form.Label>
                      <Form.Select id="province">
                        <option>تهران</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="city">شهرستان</Form.Label>
                      <Form.Select id="city">
                        <option>تهران</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="subject">موضوع</Form.Label>
                      <Form.Select id="subject">
                        <option>کشاورزی</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
          <div className="col-lg-6 mt-4"> 
            <div className='search-contaier'>
              <h6> جستجو </h6>
              <Form>
                <Form.Group controlId="search">
                  <Form.Control type="text" className='mb-4' placeholder="جستجو ..." />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Row>

        <div className='col-lg-12'>
          {hasData ?
            <Table responsive bordered>
              <thead>
                <tr>
                  <th>کد</th>
                  <th>استان</th>
                  <th>شهرستان</th>
                  <th>عنوان</th>
                  <th>موضوع</th>
                  <th>تاریخ ثبت</th>
                  <th>آخرین اصلاح</th>
                  <th>آخرین بازبینی</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>تهران</td>
                  <td>تهران</td>
                  <td>عنوان</td>
                  <td>موضوع</td>
                  <td>دیروز</td>
                  <td>امروز</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
          :
            <p className='text-center mt-3'> داده ای ثبت نشده است</p>
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default Entrepreneurship