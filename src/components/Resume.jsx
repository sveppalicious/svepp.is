import React from 'react';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';

const styles = {
  appBar : {
    backgroundColor: '#ff4081'
  },
  icon : {
    iconColor: '#ffffff'
  },
  title : {
    margin: 'auto',
    flex: 'inherit'
  }

}
const Back = (
  <IconButton>
    <Link to="/">
      <ArrowBack color='#ffffff'/>
    </Link>
  </IconButton>
)


const Resume = (props) => {
  const profileData = props.jsonObj.basics;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  //console.log(workData)
  return (
    <MuiThemeProvider>
      <div>
      <AppBar
        title="About me"
        style={styles.appBar}
        iconElementLeft={Back}
        titleStyle={styles.title}
      />
      <div className="resume">
        <About profileData={profileData}/>
        <Work workData={workData}/>
        <Education educationData={educationData} />
        <Skills skillsData={skillsData} />
      </div>
    </div>
    </MuiThemeProvider>
  )
}
export default Resume;
