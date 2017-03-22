import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
const About = props => {

  	return (
  	  <Card className="skills">
        <CardTitle
          title={props.profileData.name}
          subtitle={props.profileData.label}
        />
        <CardText>
          {props.profileData.summary}
        </CardText>
      </Card>
  	)
};

export default About;
