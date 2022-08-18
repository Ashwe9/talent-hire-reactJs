import React from 'react'
import './Footer.css'
import { useHistory } from 'react-router-dom'


export const Footer = ({nextTitle}) => {
  let history =useHistory();

  return (
      <footer>
        <div className='Footer-box'>
            <hr id="footer-line"/>
        </div>
        <span className="HomePageFooter-button">
              <button 
              onClick={() => {
                history.push('/kpis');
              } }
              className='btn btn-dark HomePageFooter-btn' >{nextTitle}</button>
            </span>
      </footer>
    )
  }
