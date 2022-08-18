import React from 'react'
import './HomePageFooter.css'
//import { useNavigate } from "react-router-dom";

export const HomePageFooter = () => {

    /*let navigate = useNavigate(); 
    const firstPage =() =>{
      let path = `http://localhost:3000/KPI`; 
      navigate(path);
    }*/
    return (
      <footer>
        <div className='HomePageFooter-box'>
            <hr id="HomePageFooter-line"/>
            <span className="HomePageFooter-button">
              <button  className='btn btn-dark HomePageFooter-btn' >Get Started</button>
            </span>
        </div>
      </footer>
    )
  }
