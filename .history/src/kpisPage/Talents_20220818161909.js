import React from 'react'
import './Talents.css'
import { useState } from 'react'
const Talents = ({title}) => {
    const [checked_1, setChecked_1] = useState(false)
    const [checked_2, setChecked_2] = useState(false)
    const [checked_3, setChecked_3] = useState(false)
    const [checked_4, setChecked_4] = useState(false)
    const [checked_5, setChecked_5] = useState(false)
    const handle_1 = () =>{
      setChecked_1(!checked_1)
    }
    const handle_2 = () =>{
      setChecked_2(!checked_2)
    }
    const handle_3 = () =>{
      setChecked_3(!checked_3)
    }
    const handle_4 = () =>{
      setChecked_4(!checked_4)
    }
    const handle_5 = () =>{
      setChecked_5(!checked_5)
    }
  
    return (
        <div className='roles-box'>
          <form className='check-form'>
            <div className='row'>
              <div className={`col-2 ${checked_1 ? "role-item-active" : "role-item"}`}>
                <label for="role_1" className={`${checked_1 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Sales Growth</label>
              </div>
              <div className={`col-5 ${checked_2 ? "role-item-active" : "role-item"}`}>
                <label for="role_2" className={`${checked_2 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Sales Target</label>
              </div>
            </div>
            <div className='row'>
              <div className={`col-5 ${checked_3 ? "role-item-active" : "role-item"}`}>
                <label for="role_3" className={`${checked_3 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Revenue</label>
              </div>
              <div className={`col-5 ${checked_4 ? "role-item-active" : "role-item"}`}>
                <label for="role_4" className={`${checked_4 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Customer Churn Rate</label>
              </div>
            </div>
            <div className='row'>
              <div className={`col-5 ${checked_5 ? "role-item-active" : "role-item"}`}>
                <label for="role_5" className={`${checked_5 ? "role-item-paragraph-active" : "role-item-paragraph"}`}>Lead Conversion Ratio</label>
              </div>
            </div>
          </form>
        </div>
        
      )
}

export default Talents
