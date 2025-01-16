import React from 'react'
import './style.scss'

const Title = (props) => {
    return (
        <div className="main_title">
            {props.children}
        </div>
    )
}

export default Title
