import React from 'react'
import './Footer.css'
import { useNavigate,Redirect } from 'react-router-dom'


export  const Footer = ({nextTitle, nextPath}) => {
  let navigate =useNavigate();
  return (
      <footer>
        <div className='Footer-box'>
            <hr id="footer-line"/>
            <div className='buttons'>
              <button className='Footer-button-back'
              onClick={() => {
                navigate(-1);
              } }
                >Back</button>

              <button className='Footer-button-next'
              onClick={() => {
                <Redirect to={nextPath} />
              } }
                >{nextTitle}</button>
        </div>
        </div>
      </footer>
    )
  }


