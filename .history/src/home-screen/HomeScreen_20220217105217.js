import React from 'react'
import { Navbar } from '../shared-components/Navbar/Navbar'
import { TrustedBy } from './components/TrustedBy/TrustedBy'
import { Roles } from './components/Roles/Roles'
import { homescreenFooter } from './components/home-screen Footer/home-screen Footer'

export const HomeScreen = () => {
  return (
    <div>
        <Navbar />
        <TrustedBy />
        <Roles />
        <homescreenFooter />
    </div>
  )
}
