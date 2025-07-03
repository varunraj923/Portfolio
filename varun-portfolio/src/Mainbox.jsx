import React from 'react'
import MidSection from './MidSection'
import MyStory from './MyStory'
import SkillsContainer from './SkillsContainer'
import ProjectContainer from './ProjectContainer'
import Experience from './Experience'
import Contact from './Contact'

const Mainbox = () => {
  return (
    <div>
   <MidSection/>
      <MyStory/>
   
      <SkillsContainer/>
      <ProjectContainer/>
      <Experience/>
      <Contact/>

    </div>
  )
}

export default Mainbox;
