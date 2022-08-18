import React from 'react'
import './HomePageFooter.css'
import { useHistory } from 'react-router-dom'

export const HomePageFooter = () => {

  const firstPage = () => {
    return(
      let history =useHistory();
      history.push('/kpis');
    )
    }

    return (
      <footer>
        <div className='HomePageFooter-box'>
            <hr id="HomePageFooter-line"/>
            <span className="HomePageFooter-button">
              <button onClick={firstPage} className='btn btn-dark HomePageFooter-btn' >Get Started</button>
            </span>
        </div>
      </footer>
    )
  }
