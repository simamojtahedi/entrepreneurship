import { Col, Form, Row, Table } from 'react-bootstrap'
import { innovation } from '../../../data/innovation/innovation'
import BreadCrumb from '../../../Utils/breadcrumb/BreadCrumb'

const InnovationMain = (props) => {

  return (
    <>
      <BreadCrumb> فرصت‌های موجود </BreadCrumb>
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
        <Table responsive bordered>
          <thead>
            <tr>
              <th>کد</th>
              <th>استان</th>
              <th>شهرستان</th>
              <th>عنوان</th>
              <th>موضوع</th>
              <th>تاریخ ثبت</th>
              <th>آخرین بازبینی</th>
              <th>اقدامات</th>
            </tr>
          </thead>
          <tbody>
            {innovation.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.province}</td>
                <td>{item.city}</td>
                <td>{item.title}</td>
                <td>{item.subject}</td>
                <td>{item.registration}</td>
                <td>{item.review}</td>
                <td>
                  <button className='btn btn-success btn-sm px-2 mx-1' onClick={() => props.ShowDetails(item.id)}> جزئیات</button>
                  <button className='btn btn-warning btn-sm px-2 mx-1' onClick={() => props.ShowRequests(item.id)}>درخواست‌ها</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default InnovationMain