import React from 'react'
import './HomeScreenFooter.css'

export const HomeScreenFooter = () => {
    return (
      <footer>
        <div className='HomeScreenFooter-box'>
            <hr id="HomeScreenFooter-line"/>
            <span className="HomeScreenFooter-button">
              <button className='btn btn-dark HomeScreenFooter-btn'>Back</button>
            </span>
        </div>
      </footer>
    )
  }
