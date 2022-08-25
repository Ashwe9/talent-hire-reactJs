import React from 'react'
import { Footer } from '../shared-components/Footer/Footer'
import { Navbar } from '../shared-components/Navbar/Navbar'
import DropDown from './DropDown'
import Header from './Header'
import './Skills.css'

const Skills = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <DropDown title="Sales"/>
      <DropDown title="Marketing"/>
      <DropDown title="Finance"/>
      <DropDown title="Development"/>
      <DropDown title="Data"/>
      <Footer nextTitle="Next: Project Details" nextPath="/projectdetails2" previousPath="/professionaldetails"/>
    </div>
  )
}

export default Skills