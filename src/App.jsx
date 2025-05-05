import React from 'react'
import { Navbar } from './Sections/Navbar'
import { Hero } from './Sections/Hero'

export const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
    </div>

  )
}
