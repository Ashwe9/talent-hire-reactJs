import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
      <footer>
        <div className='Footer-box'>
            <hr id="footer-line"/>
            <span className="footer-back">
                <button className='btn btn-dark '>Back</button>
            </span>
            <span className="footer-back">
                <button className='btn btn-dark '>Next</button>
            </span>
        </div>
      </footer>
    )
  }
