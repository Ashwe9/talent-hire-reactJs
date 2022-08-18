import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './DropDown.css'


const DropDown = ({title}) => {
  return (
    <div className='dropdown-box'>
        <p className='dropdown-title'>{title}</p>
        <FontAwesomeIcon icon={"fa-list-dropdown"} />
    </div>
  )
}

export default DropDown