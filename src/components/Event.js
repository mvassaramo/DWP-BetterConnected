import React from 'react'

import { Input, Icon } from 'semantic-ui-react'
import EventDetails from './EventDetails'

const Event = (props) =>
  <div className="event-card">
    <h3>{props.event.name}</h3>
    <h4>{props.event.local_date}</h4><br></br>
    <h4>{props.event.local_time}</h4>
    <button className="button">More details</button>
  </div>


export default Event
