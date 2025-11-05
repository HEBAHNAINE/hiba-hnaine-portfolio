import React from 'react'
import Hero from './SubContentComponent/Hero'
import About from './SubContentComponent/About'
import Project from './SubContentComponent/project'
import Competences from './SubContentComponent/Skills'
import { ContactMe } from './SubContentComponent/ContactMe'

const Content = () => {
  return (
    <div className='bg-[#1f1f3f]'>
      
      <Hero />
      <About />
      <Project />
      <Competences />
      <ContactMe />
      <a href="https://wa.me/+212778246993"><i className="fab fa-whatsapp fixed bottom-10 right-8 md:right-10 text-4xl text-green-500 animate-bounce hover:cursor-pointer"></i></a>
    </div>
  )
}

export default Content
