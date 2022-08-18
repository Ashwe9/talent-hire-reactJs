import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import React from 'react'
import './DropDown.css'


const DropDown = ({title}) => {
  return (
    <div className='dropdown-box'>
        <p className='dropdown-title'>{title}</p>
        <FaCaretDown style={color : 'white', cursor: 'pointer'} onClick={<FaCaretUp />} />
    </div>
  )
}

export default DropDown