import React from 'react'
import { Navbar } from '../shared-components/Navbar/Navbar'
import { TrustedBy } from './components/TrustedBy/TrustedBy'
import { Roles } from './components/Roles/Roles'
import { homeScreenFooter } from './components/homeScreenFooter/homeScreenFooter'

export const HomeScreen = () => {
  return (
    <div>
        <Navbar />
        <TrustedBy />
        <Roles />
        < homeScreenFooter />
    </div>
  )
}
