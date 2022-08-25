import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import React , { useState } from 'react'
import './DropDown.css'
import { left } from '@popperjs/core'
import SkillsList from './SkillsList'


const DropDown = ({title}) => {
    const [x, setCount] = useState(0);
    const incrementCount = () => {
        setCount(x + 1);
      };

  return (
    <div>
        <div className='dropdown-box' onClick={incrementCount} >
            <p className='dropdown-title'>{title}</p>
            <a> { x%2===0 ? <FaCaretDown id='icon' size={30} style={{}} /> : <FaCaretUp id='icon' size={30} style={{}} />}</a>
        </div>
        { x%2===1 ? <SkillsLit title={title}/> : <></>}
    </div>
  )
}

export default DropDown