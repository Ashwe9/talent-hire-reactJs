
import React from 'react'
import { Footer } from '../shared-components/Footer/Footer'
import { Navbar } from '../shared-components/Navbar/Navbar'
import Header from './Header'

const ProjectDetails = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer nextTitle="Next: Professional's Details" nextPath="/projectdetails" previousPath="/kpis"/>
    </div>
  )
}

export default ProjectDetails
