import {} from 'react-icons/fa'
import React from 'react'
import './DropDown.css'


const DropDown = ({title}) => {
  return (
    <div className='dropdown-box'>
        <p className='dropdown-title'>{title}</p>
        <FaCaretDown />
    </div>
  )
}

export default DropDown