import React from 'react'
import { Footer } from '../shared-components/Footer/Footer'
import { Navbar } from '../shared-components/Navbar/Navbar'
import './Skills.css'

const Skills = () => {
  return (
    <div>
        <Navbar />
        
        <Footer nextTitle="Next: Project Details" nextPath="/projectdetails" previousPath="/professionaldetails"/>
    </div>
  )
}

export default Skills