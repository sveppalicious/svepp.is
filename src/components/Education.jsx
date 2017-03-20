import React from 'react';
import moment from 'moment';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import School from 'material-ui/svg-icons/social/school';
import Divider from 'material-ui/Divider';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <Card key={index} zDepth='0'>
            <CardTitle
              title={item.institution}
              subtitle={<p>{startdate} - {enddate}</p>}
            />
            <CardHeader
              title={item.area}
              subtitle={item.studyType}
            />
          </Card>
        )
  	});

  	return (
  	  <Card className="education">
        <CardHeader
          title="Education"
          avatar={<School/>}
        />
        {getEducation}
      </Card>
  	)
};

export default Education;
