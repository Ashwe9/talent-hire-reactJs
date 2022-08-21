import React from 'react'
import './ProfessionalDetails.css'
import { Navbar } from '../shared-components/Navbar/Navbar'
import { Footer } from '../shared-components/Footer/Footer'
import DropDown from './DropDown'
import Header from './Header'

const ProfessionalDetails = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <DropDown title="How long do you need the professional for"/>
      <DropDown title="Number of professionals"/>
      <DropDown title="Level of commitment"/>
      <DropDown title="When do you need professional to start"/>
      <Footer nextTitle="Next: Skills" nextPath="/skills" previousPath="/projectdetails" />
    </div>
  )
}

export default ProfessionalDetails