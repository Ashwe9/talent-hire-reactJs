import React from 'react'
import { Navbar } from '../shared-components/navbar/navbar'
import { TrustedBy } from './components/TrustedBy/TrustedBy'
import { Roles } from './components/Roles/Roles'

export const HomeScreen = () => {
  return (
    <div>
        <Navbar />
        <TrustedBy />
        <Roles />
        <Footer />
    </div>
  )
}
