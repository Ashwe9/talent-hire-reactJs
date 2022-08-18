import React from 'react'
import './Roles.css'

export const Roles = () => {
    return (
      <div className='roles-box'>
        <h2 className='roles-title'>What role would you like to have the professional fill?</h2>
        <>
          {Roles.map((Role, index) => (
            <Role key={index} Role={Role} />
          ))}
        </>
      </div>
      
    )
  }
