import axios from 'axios'
import React, { useEffect } from 'react'

function Logout ({history}) {
    localStorage.removeItem("user")
    history.push("/login")

//   useEffect(() => {
//     axios.post('auth/logout')
//     .then(res => {
//     })
//     .catch(err => (err))
//   } , [])
  return (null)
}

export default Logout

