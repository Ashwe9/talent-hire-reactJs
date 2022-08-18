import React from 'react'
import './KPISPage.css'
import { Navbar } from '../shared-components/Navbar/Navbar'
import Header from './Header'
import DropDown from './DropDown'

const KPISPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <DropDown title="Sales"/>
    </div>
  )
}

export default KPISPage
