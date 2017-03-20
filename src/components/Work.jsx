import React from 'react';
import WorkItem from './WorkItem';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Domain from 'material-ui/svg-icons/social/domain';

const Work = props => {
    const getWorkExperience = () => {
        const workItems = [];
        props.workData.forEach((val, index) => {
          workItems.push(<WorkItem key={index} workItemData={val}/>);
        })
        return workItems;
    }

    return (
      <Card className="work">
        <CardHeader
          title="Work experience"
          avatar={<Domain/>}
        />
        <CardText>
          {getWorkExperience()}
        </CardText>
      </Card>
    );
};

export default Work;
