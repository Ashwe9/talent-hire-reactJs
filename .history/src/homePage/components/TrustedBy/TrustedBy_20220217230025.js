import React from 'react'
import './TrustedBy.css'

export const TrustedBy = () => {
  return (
    <div className='trusted-by-box'>
      <p className='trusted-by-title'>TRUSTED BY</p>
      <div className="row">
          <img className="col-sm" src= {require('../../../assets/TrustedBy/bechuzi.png')} className="trusted-item"/>
          <img className="col-sm" src= {require('../../../assets/TrustedBy/egn.png')} className="trusted-item"/>
          <img className="col-sm" src= {require('../../../assets/TrustedBy/usc.png')} className="trusted-item"/>
          <img className="col-sm" src= {require('../../../assets/TrustedBy/csr.png')} className="trusted-item"/>
          <img className="col-sm" src= {require('../../../assets/TrustedBy/motorola.png')} className="trusted-item"/>
      </div>
    </div>
  )
}
