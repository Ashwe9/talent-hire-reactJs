import React from 'react'
import './ProfessionalDetails.css'
import { Navbar } from '../shared-components/Navbar/Navbar'
import { Footer } from '../shared-components/Footer/Footer'

const ProfessionalDetails = () => {
  return (
    <div>
        <Navbar />
      <DropDown title="How long do you need the professional for"/>
      <DropDown title="Number of professionals"/>
      <DropDown title="Level of commitment"/>
      <DropDown title="When do you need professional to start"/>
      <DropDown title="Data"/>
        <Footer nextTitle="Next: Professional's Details" nextPath="/professionaldetails2" previousPath="/projectdetails" />
    </div>
  )
}

export default ProfessionalDetails