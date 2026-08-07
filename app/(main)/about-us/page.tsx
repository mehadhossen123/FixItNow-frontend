import React from 'react'
import AboutHero from '../_components/AboutHero';
import WhyWeExist from '../_components/WhyWeExist';
import MissionVision from '../_components/MissionVision';
import CoreValues from '../_components/CoreValues';

const AboutUsPage = () => {
  return (
    <div>
        <AboutHero></AboutHero>
        <WhyWeExist></WhyWeExist>
        <MissionVision></MissionVision>
        <CoreValues></CoreValues>
    </div>
  )
}

export default AboutUsPage;