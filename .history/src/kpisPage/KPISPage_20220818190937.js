import React from 'react'
import './KPISPage.css'
import { Navbar } from '../shared-components/Navbar/Navbar'
import Header from './Header'
import DropDown from './DropDown'
import Footer from '../shared-components/Footer/Footer'

const KPISPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <DropDown title="Sales"/>
      <DropDown title="Marketing"/>
      <DropDown title="Finance"/>
      <DropDown title="Development"/>
      <DropDown title="Data"/>
      <Footer nextTitle="Next: Project Details" nextPath="/projectdetails"/>
    </div>
  )
}

export default KPISPage
