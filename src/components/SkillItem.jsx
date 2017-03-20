import React from 'react';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import Subheader from 'material-ui/Subheader';
import {pinkA100} from 'material-ui/styles/colors';
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const SkillItem = props => {
  const getKeywords = props.skillItemData.keywords.map(function(item, index) {
    return (
      <Chip
        key={index}
        style={styles.chip}
        backgroundColor={pinkA100}
      >
        {item}
      </Chip>
    )
  });



    return (
        <div className="skillItem" style={styles.wrapper}>
          <Subheader>{props.skillItemData.name}</Subheader>
          {getKeywords}
        </div>
    )
};

export default SkillItem;
