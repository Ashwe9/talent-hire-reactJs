import React from 'react'
import './Footer.css'
import { useNavigate  } from 'react-router-dom'


export  const Footer = ({nextTitle, nextPath}) => {
  
  let navigate = useNavigate();
  const routeChange = () => {
    let path =  nextPath;
    navigate(path);
  };

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
              onClick={routeChange}
                >{nextTitle}</button>
        </div>
        </div>
      </footer>
    )
  }


