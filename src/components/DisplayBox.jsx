import React from 'react'
import './DisplayBox.css'

const DisplayBox = ({color}) => {
  return (
    <div className='DisplayBox' style={{backgroundColor: color}}></div>
  )
}

export default DisplayBox