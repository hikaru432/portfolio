import React from 'react'
import CtaHeader from '../components/ui/CtaHeader'
import Contact from '../components/section/Contact'

const Contactpage = () => {
  return (
    <div>
        <CtaHeader 
            title = "Let's Talk!"
            subtitle = "Providing Comprehensive and Tailored Solutions to Address Your Unique Business Challenges and Achieve Optimal Results."
        />
        <Contact />
    </div>
  )
}

export default Contactpage