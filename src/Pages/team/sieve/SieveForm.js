import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { sieve } from '../../../data/sieve/sieve'
import Countdown from 'react-countdown';
import './style.scss'

const SieveForm = () => {
    const [sieveForm, setSieveForm] = useState({})

    const Completionist = () => {
        ('زمان شما به اتمام رسید')
    }

    const handleChange = (e) => {
        setSieveForm({...sieveForm, [e.target.name]: e.target.value})
    }

    const submitsieve = (e) => {
        e.preventDefault()
        (sieveForm)
    }

    return (
        <div className='col-lg-10 offset-lg-1 sieve-form-container animate__animated animate__fadeIn'>
            <div className='sieve-form-header'>
                <h6>آزمون غربالــگری</h6>
                <Countdown date={Date.now() + 1800000}>
                    <Completionist />
                </Countdown>
            </div>
            <div className='sieve-form'>
                <Form>
                    {sieve.map(item => (
                        <div key={item.id} className="mb-3">
                            <span>{item.id}- </span>
                            <span>{item.question}</span>
                            {item.answers.map( ans => (
                                <Form.Check 
                                    type="radio"
                                    label={ans.info}
                                    name={item.id}
                                    value={ans.info}
                                    htmlFor={ans.name+ans.id}
                                    key={ans.name+ans.id}
                                    id={ans.name+ans.id}
                                    onChange={handleChange}
                                />
                            ))}
                        </div>
                    ))}
                    <h6>برای دریافت تائیدیه نتیجه آزمون می توانید از بخش <Link to='/certificates-request'>"درخواست مدارک"</Link> تقاضای صدور و ارسال پستی مدرک بدهید</h6>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success px-4' type="submit" onClick={submitsieve}>ثبت</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default SieveForm
