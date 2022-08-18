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
              <button className='Footer-button-back'
              onClick={() => {
                history.push({previousPath});
              } }
                >Back</button>
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
