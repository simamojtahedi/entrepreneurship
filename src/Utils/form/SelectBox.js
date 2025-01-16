import React from 'react'
import { Col, Form } from 'react-bootstrap'
import './Form.scss'

const SelectBox = ({name, label, selectOption, formik}) => {
    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label column> {label} </Form.Label>
            <Col>
            <Form.Select 
                aria-label="name"
                name={name}
                id={name}
                {...formik.getFieldProps(name)}
            >
                {selectOption.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Form.Select>
            </Col>
            {formik.touched[name] && formik.errors[name] && <div className='formik-error'>{formik.errors[name]}</div>}
        </Form.Group>
    )
}

export default SelectBox
