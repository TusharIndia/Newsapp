import React from 'react'
import loading from "../components/ZZ5H.gif"

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={loading} alt="not available" style={{height: "40px",width: "40px"}} className='my-4'/>
      </div>
    )
}

export default Spinner
