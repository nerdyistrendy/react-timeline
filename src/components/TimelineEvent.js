import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div>
      {props.person}
      {props.status}
      {Timestamp}
    </div>
  );
}

export default TimelineEvent;