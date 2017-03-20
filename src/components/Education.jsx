import React from 'react';
import moment from 'moment';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import School from 'material-ui/svg-icons/social/school';
import Divider from 'material-ui/Divider';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>
            <Divider></Divider>
            <h3>{item.studyType} {item.area}</h3>
  				  <h4>{item.institution}</h4>
  				  <p>Studied: {startdate} - {enddate}</p>
  				</div>
        )
  	});

  	return (
  	  <Card className="education">
        <CardHeader
          title="Education"
          avatar={<School/>}
        />
        <CardText>
          {getEducation}
        </CardText>
      </Card>
  	)
};

export default Education;
