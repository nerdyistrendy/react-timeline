import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

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

export default TimelineEvent;