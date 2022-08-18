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
      <DropDown title="Marketing"/>
      <DropDown title="Finance"/>
      <DropDown title="Development"/>
      <DropDown title="Data"/>
    </div>
  )
}

export default KPISPage
