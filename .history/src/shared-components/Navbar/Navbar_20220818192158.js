import React from 'react'
import './Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  let navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <img src= {require('../../assets/icon.png')} className="icon"/>
      <a className="navbar-brand title" href="#">Apply as a talent</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => {
                navigate('/');
              } }>Home</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link" href="#">Why</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">In-demand talents</a>
          </li>
        </ul>
        <span className="navbar-text">
          <button className='btn btn-dark navbar-btn'>Hire Talent</button>
        </span>
      </div>
    </nav>
  )
}