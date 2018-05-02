import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

import BackgroundComponent from '../homePageComponent/backgroundComponent';
import IntroComponent from '../homePageComponent/introComponent';
import TestimonialComponent from '../homePageComponent/testimonialComponent';
import ProcessComponent from '../homePageComponent/processComponent';

class HomePage extends Component {
  render() {
    return (
    <div>    
        <BackgroundComponent />
        <IntroComponent />
        <TestimonialComponent />
        <ProcessComponent />
    </div>    
    );
  }
}

export default HomePage;