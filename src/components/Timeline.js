import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const eventComponents = props.events.map((event, i) => {
    return (
      <li key = {i}>
        < TimelineEvent person={event.person} 
                        status={event.status} 
                        time={event.timestamp}/>
      </li>

    )
  })
  return (
    <ul>{eventComponents}</ul>
  )
}

export default Timeline;