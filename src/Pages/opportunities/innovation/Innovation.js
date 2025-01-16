import React, { useState } from 'react'
import Wrapper from '../../../Utils/Wrapper/Wrapper'
import InnovationDetails from './InnovationDetails'
import InnovationMain from './InnovationMain'
import InnovationRequests from './InnovationRequests'
import './style.scss'

const Innovation = () => {
  const [innovation, setInnovation] = useState(true)
  const [innovationDetail, setInnovationDetail] = useState(false)
  const [InnovationRequest, setInnovationRequest] = useState(false)
  const [innovationId, setInnovationId] = useState('')

  const showInnovation = () => {
    setInnovationDetail(false)
    setInnovationRequest(false)
    setInnovation(true)
    setInnovationId('')
    window.scrollTo(0, 0)
  }

  const ShowDetails = (id) => {
    setInnovationDetail(true)
    setInnovationRequest(false)
    setInnovation(false)
    setInnovationId(id)
    window.scrollTo(0, 0)
  }

  const ShowRequests = (id) => {
    setInnovationRequest(true)
    setInnovationDetail(false)
    setInnovation(false)
    setInnovationId(id)
    window.scrollTo(0, 0)
  }

  return (
    <Wrapper pageTitle="فرصت‌های نوآوری">
      <div className="page-wrapper">
        {innovation && <InnovationMain ShowDetails={ShowDetails} ShowRequests={ShowRequests} /> }
        {innovationDetail && <InnovationDetails showInnovation={showInnovation} id={innovationId} /> }
        {InnovationRequest && <InnovationRequests showInnovation={showInnovation} ShowDetails={ShowDetails} id={innovationId} /> }
      </div>
    </Wrapper>
  )
}

export default Innovation