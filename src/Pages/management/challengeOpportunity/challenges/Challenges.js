import React, { useState } from 'react'
import { AiOutlineQuestion } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import SubmitChallenge from './SubmitChallenge'

const Challenges = () => {
    const [submitChallenge, setSubmitChallenge] = useState(true)

    const challengesHandler = () => {
        setSubmitChallenge(false)
    }

    const addChallengeHandler = () => {
        setSubmitChallenge(true)
    }

    return (
        <div>
            <div className='col-12 manage_header'>
                <div className='manage_header_item' onClick={addChallengeHandler }>
                    <HiPlus />
                    <h6>ثبت چالش </h6>
                </div>
                <div className='manage_header_item' onClick={challengesHandler }>
                    <AiOutlineQuestion />
                    <h6>پیگیری چالش ثبت شده</h6>
                </div>
            </div>
            {submitChallenge ? 
                <SubmitChallenge /> : 
                <h6 className='text-center mt-4'>چالشی ثبت نشده است</h6>
            }
        </div>
    )
}

export default Challenges
