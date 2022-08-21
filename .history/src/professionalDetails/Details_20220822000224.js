import React from 'react'
import './Details.css'

import { useState } from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'

const Details = ({title}) => {
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
        <div className='detail-box'>
          {title==="How long do you need the professional for"? <form className='check-form' style={{marginBottom: "10px"}}>
              <div className={`${checked_1%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount1}>
              <input type="radio" className="radio" checked={`${checked_1%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_1%2===1 ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>Less than 1 month</label>
              </div>
              <div className={`${checked_2%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount2}>
                <input type="radio" className="radio" checked={`${checked_2%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_2%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>1-4 months</label>
              </div>
              <div className={`${checked_3%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount3} >
              <input type="radio" className="radio" checked={`${checked_3%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_3%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>5-12 months</label>
              </div>
                <div className={`${checked_4%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount4}>
                <input type="radio" className="radio" checked={`${checked_4%2===1 ? "checked" : ""}`}/>
                  <label className={`${checked_4%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>More than 12 months</label>
                </div>
                <div className={`${checked_5%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount5}>
                <input type="radio" className="radio" checked={`${checked_5%2===1 ? "checked" : ""}`}/>
                  <label className={`${checked_5%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>I will decide later</label>
              </div>
          </form> : title==="Number of professionals"? <form className='check-form' style={{marginBottom: "10px"}}>
              <div className={`${checked_1%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount1}>
              <input type="radio" className="radio" checked={`${checked_1%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_1%2===1 ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>One professional</label>
              </div>
              <div className={`${checked_2%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount2}>
              <input type="radio" className="radio" checked={`${checked_2%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_2%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>Two professionals</label>
              </div>
              <div className={`${checked_3%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount3} >
              <input type="radio" className="radio" checked={`${checked_3%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_3%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>A cross functional team of professionals</label>
              </div>
                <div className={`${checked_4%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount4}>
                <input type="radio" className="radio" checked={`${checked_4%2===1 ? "checked" : ""}`}/>
                  <label className={`${checked_4%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>I will decide later</label>
                </div>
          </form> : title==="Level of commitment"? <form className='check-form' style={{marginBottom: "10px"}}>
              <div className={`${checked_1%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount1}>
              <input type="radio" className="radio" checked={`${checked_1%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_1%2===1 ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>Full time</label>
              </div>
              <div className={`${checked_2%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount2}>
              <input type="radio" className="radio" checked={`${checked_2%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_2%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>Part time </label>
              </div>
              <div className={`${checked_3%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount3} >
              <input type="radio" className="radio" checked={`${checked_3%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_3%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>Hourly</label>
              </div>
                <div className={`${checked_4%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount4}>
                <input type="radio" className="radio" checked={`${checked_4%2===1 ? "checked" : ""}`}/>
                  <label className={`${checked_4%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>I will decide later</label>
                </div>
          </form>:<form className='check-form'>
              <div className={`${checked_1%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount1}>
              <input type="radio" className="radio" checked={`${checked_1%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_1%2===1 ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>Immediately</label>
              </div>
              <div className={`${checked_2%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount2}>
              <input type="radio" className="radio" checked={`${checked_2%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_2%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>In 1 or 2 weeks</label>
              </div>
              <div className={`${checked_3%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount3} >
              <input type="radio" className="radio" checked={`${checked_3%2===1 ? "checked" : ""}`}/>
                <label className={`${checked_3%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>More than 2 weeks from now</label>
              </div>
                <div className={`${checked_4%2===1 ? "detailpro-item-active" : "detailpro-item"}`} onClick={incrementCount4}>
                <input type="radio" className="radio" checked={`${checked_4%2===1 ? "checked" : ""}`}/>
                  <label className={`${checked_4%2===1  ? "detailpro-item-paragraph-active" : "detailpro-item-paragraph"}`}>I will decide later</label>
                  <a> { checked_4%2===0 ? <FaPlus id='icons' size={15}  /> : <FaMinus id='icons' size={15}  />}</a>
                </div>
           </form>} 
        </div>
        
      )
}

export default Details