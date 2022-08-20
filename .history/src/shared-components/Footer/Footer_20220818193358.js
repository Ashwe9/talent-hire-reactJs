import React from 'react'
import './Footer.css'
import { useNavigate, Navigate} from 'react-router-dom'


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
                navigate({nextPath});
              } }
                >{nextTitle}</button>
        </div>
        </div>
      </footer>
    )
  }


