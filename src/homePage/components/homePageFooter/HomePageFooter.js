import React from 'react'
import './HomePageFooter.css'
import { useHistory } from 'react-router-dom'

export const HomePageFooter = () => {

      let history =useHistory();
      
    return (
      <footer>
        <div className='HomePageFooter-box'>
            <hr id="HomePageFooter-line"/>
            <span className="HomePageFooter-button">
              <button 
              onClick={() => {
                history.push('/kpis');
              } }
              className='btn btn-dark HomePageFooter-btn' >Get Started</button>
            </span>
        </div>
      </footer>
    )
  }
