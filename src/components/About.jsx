import React from 'react';

const About = (props) => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  console.log(profileData)
  return (
    <div>

    </div>
  )
}
export default About;
