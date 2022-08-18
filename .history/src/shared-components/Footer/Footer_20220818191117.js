import React from 'react'
import './Footer.css'
import { useHistory , withRouter} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';


const Footer = ({nextTitle, nextPath}) => {
  let history =useHistory();
  let hist=createBrowserHistory();
  return (
      <footer>
        <div className='Footer-box'>
            <hr id="footer-line"/>
            <div className='buttons'>
              <button className='Footer-button-back'
              onClick={() => {
                history.goBack();
              } }
                >Back</button>

              <button className='Footer-button-next'
              onClick={() => {
                this.context.hist.push({nextPath});
              } }
                >{nextTitle}</button>
        </div>
        </div>
      </footer>
    )
  }

export default withRouter(Footer)
