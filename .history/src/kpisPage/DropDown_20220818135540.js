import React from 'react'
import './DropDown.css'

const DropDown = ({title}) => {
  return (
    <div className='dropdown-box'>
        <p className='dropdown-title'>{title}</p>
    </div>
  )
}

export default DropDown