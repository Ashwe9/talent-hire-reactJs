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
          <span className="">
                <button 
                onClick={() => {
                  history.push({previousPath});
                } }
                className='Footer-button-back' >Back</button>
          </span>
          <span className="Footer-button-next">
                <button 
                onClick={() => {
                  history.push({nextPath});
                } }
                className='' >{nextTitle}</button>
          </span>
        </div>
        </div>
      </footer>
    )
  }
