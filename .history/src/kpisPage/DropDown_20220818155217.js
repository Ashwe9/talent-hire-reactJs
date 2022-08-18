import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import React , { useState } from 'react'
import './DropDown.css'
import { left } from '@popperjs/core'


const DropDown = ({title}) => {
    const [x, setCount] = useState(0);
    const incrementCount = () => {
        setCount(x + 1);
      };

  return (
    <div className='dropdown-box'  >
        <p className='dropdown-title'>{title}</p>
        <a onClick={incrementCount}> { x%2===1 ? <FaCaretDown id='icon' size={30} style={{}} /> : <FaCaretUp id='icon' size={30} style={{}} />}</a>
        {/*<FaCaretDown id='icon' size={30} style={{}}/>*/}
    </div>
  )
}

export default DropDown