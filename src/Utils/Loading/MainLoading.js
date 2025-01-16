import React from 'react'
import './style.scss'

const MainLoading = () => {
  return (
    <div className='main-loading'>
       <div>
            <img src="assets/img/loader.gif" alt="loader" />
            <p> در حال بارگذاری  ... </p>
       </div>
    </div>
  )
}

export default MainLoading