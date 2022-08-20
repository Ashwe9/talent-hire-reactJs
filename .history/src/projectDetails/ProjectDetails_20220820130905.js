
import React from 'react'
import { Footer } from '../shared-components/Footer/Footer'
import { Navbar } from '../shared-components/Navbar/Navbar'
import Details from './Details'
import Header from './Header'

const ProjectDetails = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Details />
      <Footer nextTitle="Next: Professional's Details" nextPath="/professionaldetails" previousPath="/kpis"/>
    </div>
  )
}

export default ProjectDetails
