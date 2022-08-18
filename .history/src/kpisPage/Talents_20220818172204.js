import React from 'react'
import './Talents.css'
import { useState } from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'


const Talents = ({title}) => {
    const [checked_1, setCount1] = useState(0);
    const incrementCount1 = () => {
        setCount1(checked_1 + 1);
      };
    const [checked_2, setCount2] = useState(0);
    const incrementCount2 = () => {
        setCount2(checked_2 + 1);
    };
    const [checked_3, setCount3] = useState(0);
    const incrementCount3 = () => {
    setCount3(checked_3 + 1);
    };
    const [checked_4, setCount4] = useState(0);
    const incrementCount4 = () => {
        setCount4(checked_4 + 1);
    };
    const [checked_5, setCount5] = useState(0);
    const incrementCount5 = () => {
        setCount5(checked_5 + 1);
        };
    return (
        <div className='talents-box'>
          <form className='check-form'>
            <div className='row'>
              <div className={`col-2 ${checked_1%2===1 ? "talent-item-active" : "talent-item"}`} onClick={incrementCount1}>
                <label className={`${checked_1%2===1 ? "talent-item-paragraph-active" : "talent-item-paragraph"}`}>Sales Growth</label>
                <a> { checked_1%2===0 ? <FaPlus id='icons' size={15}  /> : <FaMinus id='icons' size={15}  />}</a>
              </div>
              <div className={`col-2 ${checked_2%2===1 ? "talent-item-active" : "talent-item"}`} onClick={incrementCount2}>
                <label className={`${checked_2%2===1  ? "talent-item-paragraph-active" : "talent-item-paragraph"}`}>Sales Target</label>
                <a> { checked_2%2===0 ? <FaPlus id='icons' size={15}  /> : <FaMinus id='icons' size={15}  />}</a>
              </div>
              <div className={`col-1 ${checked_3%2===1 ? "talent-item-active" : "talent-item"}`} onClick={incrementCount3} >
                <label className={`${checked_3%2===1  ? "talent-item-paragraph-active" : "talent-item-paragraph"}`}>Revenue</label>
                <a> { checked_3%2===0 ? <FaPlus id='icons' size={15}  /> : <FaMinus id='icons' size={15}  />}</a>
              </div>
              <div className={`col-3 ${checked_4%2===1 ? "talent-item-active" : "talent-item"}`} onClick={incrementCount4}>
                <label className={`${checked_4%2===1  ? "talent-item-paragraph-active" : "talent-item-paragraph"}`}>Customer Churn Rate</label>
                <a> { checked_4%2===0 ? <FaPlus id='icons' size={15}  /> : <FaMinus id='icons' size={15}  />}</a>
              </div>
            </div>
            <div className='row'>
              <div className={`col-3 ${checked_5%2===1 ? "talent-item-active" : "talent-item"}`} onClick={incrementCount5}>
                <label className={`${checked_5%2===1  ? "talent-item-paragraph-active" : "talent-item-paragraph"}`}>Lead Conversion Ratio</label>
                <a> { checked_5%2===0 ? <FaPlus id='icons' size={15}  /> : <FaMinus id='icons' size={15}  />}</a>
            </div>
            </div>
          </form>
        </div>
        
      )
}

export default Talents
