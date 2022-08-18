import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import React from 'react'
import './DropDown.css'


const DropDown = ({title}) => {
  return (
    <div className='dropdown-box'>
        <p className='dropdown-title'>{title}</p>
        <FaCaretDown  size={50}
            style={{color: 'white',cursor: 'pointer', right: '0%'}} onClick={<FaCaretUp />} />
    </div>
  )
}

export default DropDown