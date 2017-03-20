import React from 'react';
import moment from 'moment';
import Divider from 'material-ui/Divider';

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
        <section className="workItem">
          <Divider></Divider>
          <p>{props.workItemData.position}, <span>{props.workItemData.company}</span></p>
          <p className="workDates">{getWorkDates()}</p>
          <p>{props.workItemData.summary}</p>
        </section>
    )
};

export default WorkItem;
