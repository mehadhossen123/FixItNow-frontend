import React from 'react'
import Slider from '../(globalComponents)/slider';
import Hero1 from '../(globalComponents)/Hero1';
import ServiceHubs from '../(globalComponents)/HubCard';

const MainPage = () => {
  return (
    <div>
      <Slider></Slider>
      <Hero1></Hero1>
      <ServiceHubs></ServiceHubs>
    </div>
  );
}

export default MainPage