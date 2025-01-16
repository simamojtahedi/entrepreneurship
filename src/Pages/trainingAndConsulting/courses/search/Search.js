import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './style.scss'

const Search = () => {
    const [search, setSearch] = useState("")

    return (
        <div className="coursesSearch animate__animated animate__fadeIn">
            <h6> جستجوی دوره </h6>
            <Form>
                <p className='text-center'> نام دوره مورد نظر را وارد کنید : </p>
                <div className="srarchInput">
                <i className="fa fa-search" aria-hidden="true"></i>
                    <input 
                        placeholder="" 
                        type="text" 
                        value={search} 
                        onChange={ e => setSearch(e.target.value)} 
                    />   
                </div> 
            </Form>            
        </div>
    )
}

export default Search
