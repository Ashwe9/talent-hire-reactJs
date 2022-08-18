import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import React from 'react'
import './DropDown.css'
import { left } from '@popperjs/core'


const DropDown = ({title}) => {
    let x=1;
    const clicked =() =>{
        x=x+1;
    }

  return (
    <div className='dropdown-box' onClick={clicked} >
        <p className='dropdown-title'>{title}</p>
        <a> { x%2===1 ? <FaCaretDown id='icon' size={30} style={{}} /> : <FaCaretUp id='icon' size={30} style={{}} />}</a>
        {/*<FaCaretDown id='icon' size={30} style={{}}/>*/}
    </div>
  )
}

export default DropDown