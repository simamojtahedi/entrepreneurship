import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const BoxItem = (props) => {
    return (
        <>
            {props.active ?
                <Link 
                    to={props.itemLink} 
                    className="col-md-1 col-xs-2 BoxItem"
                    target={props.target}
                >
                    <div className="BoxItemImage"><img src={props.image} alt={props.itemTitle} /></div>
                    <span>{props.itemTitle}</span>
                </Link>
            :
                <Link 
                    to={props.itemLink} 
                    className="col-md-1 col-xs-2 BoxItem BoxItemDeactive"
                    target={props.target}
                    onClick={ (event) => event.preventDefault() }
                >
                    <div className="BoxItemImage"><img src={props.image} alt={props.itemTitle} /></div>
                    <span>{props.itemTitle}</span>
                </Link>
            }
        </>
    )
}

export default BoxItem
