import React from 'react'
import { Footer } from '../shared-components/Footer/Footer'
import { Navbar } from '../shared-components/Navbar/Navbar'
import Header from './Header'
import './Skills.css'

const Skills = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Footer nextTitle="Next: Project Details" nextPath="/projectdetails2" previousPath="/professionaldetails"/>
    </div>
  )
}

export default Skills