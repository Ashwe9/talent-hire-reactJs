import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import React from 'react'
import './DropDown.css'
import { left } from '@popperjs/core'


const DropDown = ({title}) => {
    const clicked =() =>{
        return (true);
    }
  return (
    <div className='dropdown-box'>
        <p className='dropdown-title'>{title}</p>
        <button onClick={clicked} > {clicked}? <FaCaretDown id='icon' size={30} /> : <FaCaretUp id='icon' size={30} /></button>
        
    </div>
  )
}

export default DropDown