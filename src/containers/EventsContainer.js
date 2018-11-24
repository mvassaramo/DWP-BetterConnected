import React from 'react'

import Search from '../components/Search'
import Event from '../components/Event'
import { events } from '../data.js'


export default class EventsContainer extends React.Component {

  state = {
      searchQuery: ""
    }

    updateSearch = (searchQuery) => {this.setState({ searchQuery })  }

    renderAllEvents = () =>
      <div>
      <Search updateSearch={this.updateSearch}/>
      {this.filterEvents().map(event =>
        <Event event={event} />
      )}
    </div>


    filterEvents = () =>
        this.props.events.filter(event => {
          const name = event.name.toLowerCase()

          const searchQuery = this.state.searchQuery.toLowerCase()

          return name.includes(searchQuery)

        })


  render() {
    return(
      <div>
        <h1>What type of event are you interested in?</h1>
            {this.renderAllEvents()}
      </div>
    )
  }

}
