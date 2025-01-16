import React from 'react'
import { Col, Form } from 'react-bootstrap'
import './Form.scss'

const Input = ({ label, type="text", formik, name, text}) => {
    return (
        <Form.Group className="mb-3" >
            <Form.Label column> {label} </Form.Label>
            <Col>
            <Form.Control 
                type={type} 
                id={name}
                {...formik.getFieldProps(name)}
                name={name}
            />
            </Col>
            {text ? 
                <Form.Text className="text-muted">
                    {text}
                </Form.Text>
            : 
                ''
            }
            {formik.touched[name] && formik.errors[name] && <div className='formik-error'>{formik.errors[name]}</div>}
        </Form.Group>
    )
}

export default Input
