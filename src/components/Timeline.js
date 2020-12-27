import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  
  const eventComponents = props.events.map((event, i) => {
    return (
      <li key = {i}>
        < TimelineEvent person={event.person} 
                        status={event.status} 
                        timeStamp={event.timeStamp}/>
      </li>

    )
  })
  return (
    <ul>{eventComponents}</ul>
  )
}

Timeline.propTypes = {
  events: PropTypes.array.isRequired
};

export default Timeline;