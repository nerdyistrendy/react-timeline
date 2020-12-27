import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {

  return (
    <div>
      <ul>
      <li>{props.person}</li>
      <li>{props.status}</li>
      <li><Timestamp time={props.timeStamp}/></li>
      </ul>
      
    </div>
  );
}

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default TimelineEvent;