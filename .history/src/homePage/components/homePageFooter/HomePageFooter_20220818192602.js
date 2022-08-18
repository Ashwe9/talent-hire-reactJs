import React from 'react'
import './HomePageFooter.css'
import { useNavigate } from 'react-router-dom'

export const HomePageFooter = () => {

      let navigate =useNavigate();
      
    return (
      <footer>
        <div className='HomePageFooter-box'>
            <hr id="HomePageFooter-line"/>
            <span className="HomePageFooter-button">
              <button 
              onClick={() => {
                navigate('/kpis' , { replace: true });
              } }
              className='btn btn-dark HomePageFooter-btn' >Get Started</button>
            </span>
        </div>
      </footer>
    )
  }
