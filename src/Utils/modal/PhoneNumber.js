import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { packages } from '../../data/package/packages';
import './style.scss'

const PhoneNumber = (props) => {
    const ThisPackage = packages.filter(pack => pack.id === props.id)[0]
    const [cash, setCash] = useState('')
    const [credit, setCredit] = useState('')

    useEffect(() => {
        if(ThisPackage) {
            setCash(ThisPackage.cash)
            setCredit(ThisPackage.credit)
        }
    }, [ThisPackage])

    const timeChanged = (e) => {
        setCash(e.target.value * ThisPackage.cash)
        setCredit(e.target.value * ThisPackage.credit)
    }

    return (
      <>
        <Modal show={props.show} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>انتخاب خط تلفن {ThisPackage && ThisPackage.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <Form>
                <div className="mpackage-phone-numbers">
                    <h6> انتخاب خط تلفن:</h6>
                    <Form.Check inline label="97895500" id="number1" type="radio" name="number" />
                    <Form.Check inline label="37822200" id="number2" type="radio" name="number" />
                    <Form.Check inline label="14895500" id="number3" type="radio" name="number" />
                    <Form.Check inline label="37824200" id="number4" type="radio" name="number" />
                    <Form.Check inline label="17895512" id="number5" type="radio" name="number" />
                    <Form.Check inline label="45895500" id="number6" type="radio" name="number" />
                    <Form.Check inline label="37895500" id="number7" type="radio" name="number" />
                    <Form.Check inline label="37895120" id="number8" type="radio" name="number" />
                    <Form.Check inline label="37895507" id="number9" type="radio" name="number" />
                    <Form.Check inline label="57895500" id="number10" type="radio" name="number" />
                </div>
                <div className='mpackage-timing'>
                    <h6> انتخاب بازه زمانی:</h6>
                    <Form.Select aria-label="Default select example" onChange={timeChanged}>
                        <option value="1">یک ماهه</option>
                        <option value="3">سه ماهه</option>
                        <option value="6">شش ماهه</option>
                        <option value="12">دوازده ماهه</option>
                    </Form.Select>
                </div>
                <div className='mpackage-pricing'>
                    <div><p> مبلغ اعتباری: </p><p> {credit.toLocaleString()} ریال </p></div>
                    <div><p> مبلغ نقدی: </p><p> {cash.toLocaleString()} ریال </p></div>
                </div>
            </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
              بستن
            </Button>
            <Button variant="success" onClick={props.close}>
              خرید
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PhoneNumber