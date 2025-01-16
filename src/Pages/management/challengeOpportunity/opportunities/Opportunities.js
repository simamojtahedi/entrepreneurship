import React, { useState } from 'react'
import { AiOutlineQuestion } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import SubmitOpportunity from './SubmitOpportunity'

const Opportunities = () => {
    const [submitOpportunity, setSubmitOpportunity] = useState(true)

    const opportunitiesHandler = () => {
        setSubmitOpportunity(false)
    }

    const addOpportunityHandler = () => {
        setSubmitOpportunity(true)
    }

    return (
        <div>
            <div className='col-12 manage_header'>
                <div className='manage_header_item' onClick={addOpportunityHandler }>
                    <HiPlus />
                    <h6>ثبت فرصت </h6>
                </div>
                <div className='manage_header_item' onClick={opportunitiesHandler }>
                    <AiOutlineQuestion />
                    <h6>پیگیری فرصت ثبت شده</h6>
                </div>
            </div>

            {submitOpportunity ? 
                <SubmitOpportunity /> : 
                <h6 className='text-center mt-4'>فرصتی ثبت نشده است</h6>
            }
        </div>
    )
}

export default Opportunities
