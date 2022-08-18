import React from 'react'
import './DropDown.css'

const DropDown = ({title}) => {
  return (
    <div className='dropdown-box'>
        <p className='dropdown-title'>{title}</p>
        <i class="fa-regular fa-list-dropdown"></i>
    </div>
  )
}

export default DropDown