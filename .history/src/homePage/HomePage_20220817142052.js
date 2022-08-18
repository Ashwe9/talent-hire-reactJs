import React from 'react'
import { Navbar } from '../shared-components/Navbar/Navbar'
import { TrustedBy } from './components/TrustedBy/TrustedBy'
import { Roles } from './components/Roles/Roles'
import { HomePageFooter } from './components/homePageFooter/HomePageFooter'
import KPISPage from '../kpisPage/KPISPage'

export const HomePage = () => {
  return (
    <div>
        <Navbar />
        <TrustedBy />
        <Roles />
        <HomePageFooter />
        <KPISPage />
    </div>
  )
}
