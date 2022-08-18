import React from 'react'
import './TrustedBy.css'

export const TrustedBy = () => {
  return (
    <div className='trusted-by-box'>
      <p className='trusted-by-title'>TRUSTED BY</p>
      <div className="row">
          <img className="col-sm trusted-item" src= {require('../../../assets/TrustedBy/bechuzi.png')} />
          <img className="col-sm trusted-item" src= {require('../../../assets/TrustedBy/egn.png')} />
          <img className="col-sm trusted-item" src= {require('../../../assets/TrustedBy/usc.png')} />
          <img className="col-sm trusted-item" src= {require('../../../assets/TrustedBy/csr.png')} />
          <img className="col-sm trusted-item" src= {require('../../../assets/TrustedBy/motorola.png')} />
      </div>
    </div>
  )
}
