import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='box'>
      <div className='skills-header-box'>
        <p className='skills-header'>   
            Skills
        </p>
      </div>
      <div className='category'>
        <p>
          Change skill category
        </p>
      </div>
    </div>
  )
}

export default Header