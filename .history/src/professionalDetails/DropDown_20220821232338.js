import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import React , { useState } from 'react'
import './DropDown.css'
import Details from './Details'


const DropDown = ({title}) => {
    const [x, setCount] = useState(0);
    const incrementCount = () => {
        setCount(x + 1);
      };

  return (
    <div>
        <div className='dropdowns-box' onClick={incrementCount} >
            <p className='dropdowns-title'>{title}</p>
            <a> { x%2===0 ? <FaCaretDown id='icons' size={30} style={{}} /> : <FaCaretUp id='icons' size={30} style={{}} />}</a>
        </div>
        {x%2===1 ? <Details title={title} /> : <></>}
    </div>
  )
}

export default DropDown