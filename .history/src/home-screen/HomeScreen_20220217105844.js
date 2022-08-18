import React from 'react'
import { Navbar } from '../shared-components/Navbar/Navbar'
import { TrustedBy } from './components/TrustedBy/TrustedBy'
import { Roles } from './components/Roles/Roles'
import { HomeScreenFooter } from './components/HomeScreenFooter/HomeScreenFooter'

export const HomeScreen = () => {
  return (
    <div>
        <Navbar />
        <TrustedBy />
        <Roles />
        <HomeScreenFooter />
    </div>
  )
}
