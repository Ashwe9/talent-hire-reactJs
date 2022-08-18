import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import React from 'react'
import './DropDown.css'
import { left } from '@popperjs/core'


const DropDown = ({title}) => {
  return (
    <div className='dropdown-box'>
        <p className='dropdown-title'>{title}</p>
        <FaCaretDown  size={30} 
            style={{color: 'white',cursor: 'pointer', marginLeft:'300px '}} onClick={<FaCaretUp />} />
    </div>
  )
}

export default DropDown