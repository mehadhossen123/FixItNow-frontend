import React from 'react'
import ContactHeroSection from '../_components/ContactHeroSection'
import ContactSection from '../_components/ContactSection'

import SupportBanner from '../_components/SupportBanner'

const page = () => {
  return (
    <div>
      <ContactHeroSection></ContactHeroSection>
      <ContactSection></ContactSection>
      <SupportBanner></SupportBanner>
    </div>
  );
}

export default page