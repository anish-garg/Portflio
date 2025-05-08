import React from 'react'
import { Navbar } from './Sections/Navbar'
import { Hero } from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'

export const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
    </div>

  )
}
