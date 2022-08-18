import React from 'react'
import './Talents.css'
import { useState } from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'


const Talents = ({title}) => {
    const [checked_1, setCount] = useState(0);
    const incrementCount1 = () => {
        setCount(checked_1 + 1);
      };
    return (
        <div className='roles-box'>
          <form className='check-form'>
            <div className='row'>
              <div className={`col-3 ${checked_1 ? "role-item-active" : "role-item"}`} onClick={incrementCount1}>
                <label for="role_1" className={`${checked_1%2===1 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Sales Growth</label>
                <a> { checked_1%2===1 ? <FaPlus id='icon' size={20} style={{}} /> : <FaMinus id='icon' size={20} style={{}} />}</a>
              </div>
              {/*<div className={`col-3 ${checked_2 ? "role-item-active" : "role-item"}`}>
                <label for="role_2" className={`${checked_2 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Sales Target</label>
                <a> { x%2===0 ? <FaCaretDown id='icon' size={30} style={{}} /> : <FaCaretUp id='icon' size={30} style={{}} />}</a>
              </div>
              <div className={`col-3 ${checked_3 ? "role-item-active" : "role-item"}`}>
                <label for="role_3" className={`${checked_3 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Revenue</label>
                <a> { x%2===0 ? <FaCaretDown id='icon' size={30} style={{}} /> : <FaCaretUp id='icon' size={30} style={{}} />}</a>
              </div>
              <div className={`col-4 ${checked_4 ? "role-item-active" : "role-item"}`}>
                <label for="role_4" className={`${checked_4 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Customer Churn Rate</label>
                <a> { x%2===0 ? <FaCaretDown id='icon' size={30} style={{}} /> : <FaCaretUp id='icon' size={30} style={{}} />}</a>
              </div>
            </div>
            <div className='row'>
              <div className={`col-4 ${checked_5 ? "role-item-active" : "role-item"}`}>
                <label for="role_5" className={`${checked_5 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Lead Conversion Ratio</label>
                <a> { x%2===0 ? <FaCaretDown id='icon' size={30} style={{}} /> : <FaCaretUp id='icon' size={30} style={{}} />}</a>
    </div>*/}
            </div>
          </form>
        </div>
        
      )
}

export default Talents
