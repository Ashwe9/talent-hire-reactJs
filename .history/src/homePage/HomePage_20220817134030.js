import React from 'react'
import { Navbar } from '../shared-components/Navbar/Navbar'
import { TrustedBy } from './components/TrustedBy/TrustedBy'
import { Roles } from './components/Roles/Roles'
import { HomePageFooter } from './components/HomePageFooter/HomePageFooter'

export const HomePage = () => {
  return (
    <div>
        <Navbar />
        <TrustedBy />
        <Roles />
        <HomePageFooter />
    </div>
  )
}
