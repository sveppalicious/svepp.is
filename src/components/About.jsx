import React from 'react';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const About = (props) => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  console.log(profileData)
  return (
    <MuiThemeProvider>
      <div className="about">
        <Work workData={workData}/>
        <Skills skillsData={skillsData} />
        <Education educationData={educationData} />
      </div>
    </MuiThemeProvider>
  )
}
export default About;
