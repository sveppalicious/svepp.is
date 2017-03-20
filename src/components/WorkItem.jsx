import React from 'react';
import moment from 'moment';
import Divider from 'material-ui/Divider';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }



    return (
      <Card zDepth='0'>
        <CardTitle
          title={<p>{props.workItemData.position} at <span>{props.workItemData.company}</span></p>}
          subtitle={<p className="workDates">{getWorkDates()}</p>}
        />
        <CardText>
          {props.workItemData.summary}
        </CardText>
      </Card>
    )
};

export default WorkItem;
