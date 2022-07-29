import React from 'react';
import Educations from './Education';
import Experience from './Experience';
import Home from './Home/Index';
import Information from './Infomation';
import Skills from './Skills';
import Projects from './Projects';
import SideBar from './SideBarMenu';

function Combine() {

  return (
    <>
        <SideBar />
        <Home />
        <Information />
        <Skills />
        <Educations />
        <Experience />
        <Projects />
    </>
  )
}

export default Combine;