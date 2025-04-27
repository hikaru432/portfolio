import React from 'react'
import Aboutus from '../components/section/Aboutus'
import CtaHeader from '../components/ui/CtaHeader'

const About = () => {
  return (
    <div>
      <CtaHeader 
        title = "About Me"
        subtitle = "I deliver customized technology solutions that solve real business challenges and drive outstanding results."
      />
      <Aboutus />
    </div>
  )
}

export default About