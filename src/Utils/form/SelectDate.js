import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import { fixNumbers } from "../functions";
import "./Form.scss";

const SelectDate = (props) => {
  const [state, setState] = useState({ format: "MM/DD/YYYY" });

  const convert = (date, format = state.format) => {
    let object = { date, format };
    let selectedDate = new DateObject(object)
      .convert(gregorian, gregorian_fa)
      .format();
    setState(selectedDate);
    props.setDateState(fixNumbers(selectedDate));
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label column> {props.label} </Form.Label>
      <Col style={{ direction: "rtl" }}>
        <DatePicker
          style={{
            width: "100%",
            padding: "0.375rem 0.75rem",
            fontSize: "1rem",
            lineHeight: "1.7",
            color: "#212529",
            height: "100%",
          }}
          value={state.date}
          onChange={convert}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          format="YYYY/MM/DD"
        />
      </Col>
    </Form.Group>
  );
};

export default SelectDate;
