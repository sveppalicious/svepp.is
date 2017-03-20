import React from 'react';
import {Card, CardTitle, CardMedia, CardText} from 'material-ui/Card';
import Code from 'material-ui/svg-icons/action/code';
import Photo from '../../public/sverrir.jpg';
const About = props => {

  	return (
  	  <Card className="skills">
        <CardTitle
          title={props.profileData.name}
          subtitle={props.profileData.label}
        />
        <CardMedia>
          <img src={Photo} alt="Photo of me"/>
        </CardMedia>
        <CardText>
          {props.profileData.summary}
        </CardText>
      </Card>
  	)
};

export default About;
