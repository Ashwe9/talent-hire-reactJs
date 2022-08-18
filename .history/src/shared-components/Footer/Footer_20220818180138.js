import React from 'react'
import './Footer.css'
import { useHistory } from 'react-router-dom'


export const Footer = ({nextTitle, nextPath, previousPath}) => {
  let history =useHistory();

  return (
      <footer>
        <div className='Footer-box'>
            <hr id="footer-line"/>
            <div className='buttons'>
          <span className="Footer-button-back">
                <button 
                onClick={() => {
                  history.push({previousPath});
                } }
                className='btn btn-dark HomePageFooter-btn' >Back</button>
          </span>
          <span className="Footer-button-next">
                <button 
                onClick={() => {
                  history.push({nextPath});
                } }
                className='btn btn-dark HomePageFooter-btn' >{nextTitle}</button>
          </span>
        </div>
        </div>
      </footer>
    )
  }
