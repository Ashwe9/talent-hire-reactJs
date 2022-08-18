import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
      <footer>
        <div className='Footer-box'>
            <hr id="footer-line"/>
        </div>
        <div className='d-flex'>
            <span className="footer-back">
                <button className='btn btn-dark '>Back</button>
            </span>
        </div>
      </footer>
    )
  }
