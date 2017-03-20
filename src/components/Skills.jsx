import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Code from 'material-ui/svg-icons/action/code';
import SkillItem from './SkillItem'
const Skills = props => {
  const getSkills = () => {
      const skillItems = [];
      props.skillsData.forEach((val, index) => {
        skillItems.push(<SkillItem key={index} skillItemData={val}/>);
      })
      return skillItems;
  }

  	return (
  	  <Card className="skills">
        <CardHeader
          title="Skills"
          avatar={<Code></Code>}
        />
        <CardText>
          {getSkills()}
        </CardText>
      </Card>
  	)
};

export default Skills;
