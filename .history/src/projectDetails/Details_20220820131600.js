import React from 'react'
import './Details.css'

 import { useState } from 'react'

const Details = () => {

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
      <div className='details-box'>
        <form className='check-form'>
          <div className='row'>
            <div className={` ${checked_1 ? "detail-item-active" : "detail-item"}`}>
              <input type="checkbox" id="detail_1" name="detail_1" className='detail-check' onClick={handle_1}/>
              <label className={`${checked_1 ? "detail-item-paragraph-active" : "detail-item-paragraph"}`}>New bussiness never started</label>
            </div>
            <div className={` ${checked_2 ? "detail-item-active" : "detail-item"}`}>
              <input type="checkbox" id="detail_2" name="detail_2"  className='detail-check' onClick={handle_2}/>
              <label className={`${checked_2 ? "detail-item-paragraph-active" : "detail-item-paragraph"}`}>Existing bussiness that is expanding</label>
            </div>
          </div>
          <div className='row'>
            <div className={` ${checked_3 ? "detail-item-active" : "detail-item"}`}>
              <input type="checkbox" id="detail_3" name="detail_3" className='detail-check' onClick={handle_3}/>
              <label className={`${checked_3 ? "detail-item-paragraph-active" : "detail-item-paragraph"}`}>Ongoing advise and mentorship</label>
            </div>
            <div className={` ${checked_4 ? "detail-item-active" : "detail-item"}`}>
              <input type="checkbox" id="detail_4" name="detail_4" className='detail-check' onClick={handle_4}/>
              <label className={`${checked_4 ? "detail-item-paragraph-active" : "detail-item-paragraph"}`}>None of the above, I am interested to learn about kimbocorp</label>
            </div>
          </div>
        </form>
        <a href='#' className='details-question'>Looking to work with companies?</a>
      </div>
      
    )
}

export default Details