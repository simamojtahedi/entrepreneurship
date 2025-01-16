import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.scss'

const BreadCrumb = (props) => {
    return (
        <div className="mb-4 breadcrumb_container">
            <Breadcrumb className="breadcrumb">
                <Link to="/"> داشبورد </Link> 
                <Breadcrumb.Item active> /  {props.children}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumb
