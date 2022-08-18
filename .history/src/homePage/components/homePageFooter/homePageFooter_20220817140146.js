import React from 'react'
import './HomePageFooter.css'

export const HomePageFooter = () => {
    return (
      <footer>
        <div className='HomePageFooter-box'>
            <hr id="HomePageFooter-line"/>
            <span className="HomePageFooter-button">
              <button onClick={firstPage} className='btn btn-dark HomePageFooter-btn' >Get Started</button>
            </span>
        </div>
      </footer>
    )
  }
