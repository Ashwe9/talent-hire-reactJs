import React from 'react'
import './ProfessionalDetails.css'
import { Navbar } from '../shared-components/Navbar/Navbar'
import { Footer } from '../shared-components/Footer/Footer'

const ProfessionalDetails = () => {
  return (
    <div>
        <Navbar />
        <Footer nextTitle="Next: Professional's Details" nextPath="/professionaldetails2" previousPath="/projectdetails/>
    </div>
  )
}

export default ProfessionalDetails